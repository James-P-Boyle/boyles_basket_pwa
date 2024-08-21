import { useCallback, useMemo } from "react"
import { v4 as uuid} from 'uuid'

import { Item, List } from "@/App"
import useLocalStorage from "@/hooks/useLocalStorage"

import { areStringsEqual, generateUniqueListName, getWeekNumber } from "@/shared/utils"
import { useNavigate } from "react-router-dom"
import useListRelations from "./useListRelations"
import useItems from "./useItems"

export default function useList(listId?: string) {

  const [lists, setLists] = useLocalStorage<List[]>('lists', [])
  const { items, addItem, updateItem, deleteItem } = useItems()
  const { relations, addRelation, removeRelation } = useListRelations()

  const navigate = useNavigate()

  const addNewList = useCallback(() => {
    const currentDate = new Date()
    const weekNumber = getWeekNumber(currentDate)
    let baseName = `Week ${weekNumber}`
    let name = generateUniqueListName(lists, baseName)

    const newList = { id: uuid(), name, createdAt: currentDate, items: [] }

    const existingList = lists.some(list => list.name === name)

    if (!existingList) {
      setLists(prev => [newList, ...prev])
    }

    return newList
  }, [setLists])

  const updateListName = useCallback((listId: string, newName: string) => {
    setLists(prevLists =>
      prevLists.map(list =>
        list.id === listId ? { ...list, name: newName } : list
      )
    )
  }, [setLists])

  const deleteList = useCallback((listId: string) => {
    setLists(prevLists => prevLists.filter(l => l.id !== listId))

    relations.filter(r => r.listId === listId).forEach(r => removeRelation(r.itemId, listId))

    setTimeout(() => {
      navigate("/")
    }, 0)
  }, [setLists, relations, removeRelation, navigate])

  const listItems = useMemo(() => {
    if (!listId) return []
    const listRelations = relations.filter(r => r.listId === listId)
    return items.filter(item => listRelations.some(r => r.itemId === item.id))
  }, [listId, items, relations])

  const addItemToList = useCallback((listId: string, newItem: Item) => {
    const existingItem = listItems.find(i => areStringsEqual(i.name, newItem.name))

    if (existingItem) {
      return { success: false, message: "This item is already in the list." }
    }

    const res = addItem(newItem)

    if(res.item){
      // alert(res.message)
      addRelation(res.item.id, listId)

    }

  }, [listItems, items, addItem, addRelation])

  const removeItemFromList = useCallback((listId: string, itemId: string) => {

    const item = items.find(i => i.id === itemId)
    if (item) {
      deleteItem(itemId)
      console.log(listId)
      // removeRelation(itemId, listId)

    }

  }, [items, removeRelation, updateItem, deleteItem])

  const list = useMemo(() => lists.find(list => list.id === listId) || null, [lists, listId])

  return {
    lists,
    list,
    listItems,
    addNewList,
    updateListName,
    deleteList,
    addItemToList: (newItem: Item) => addItemToList(listId!, newItem),
    removeItemFromList: (itemId: string) => removeItemFromList(listId!, itemId)
  }
}
