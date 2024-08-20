import { useCallback, useMemo } from "react"
import { v4 as uuid} from 'uuid'

import { Item, List } from "@/App"
import useLocalStorage from "@/hooks/useLocalStorage"

import { areStringsEqual, delayedNavigate } from "@/shared/utils"
import { useNavigate } from "react-router-dom"
import useListRelations from "./useListRelations"
import useItems from "./useItems"

export default function useList(listId?: string) {

  const [lists, setLists] = useLocalStorage<List[]>('lists', [])
  const { items, addItem, updateItem, deleteItem } = useItems()
  const { relations, addRelation, removeRelation } = useListRelations()

  const navigate = useNavigate()

  const addNewList = useCallback((newList: List) => {
    const listWithId = {...newList, id: uuid()}
    setLists(prev => [listWithId, ...prev])
    // delayedNavigate(`/list/${listWithId.id}`)
    setTimeout(() => {
      navigate(`/list/${listWithId.id}`)
    }, 0)
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

  const addItemToList = useCallback((listId: string, newItem: Omit<Item, 'id'>) => {
    const existingItem = listItems.find(i => i.name.toLowerCase().trim() === newItem.name.toLowerCase().trim())

    if (existingItem) {
      return { success: false, message: "This item is already in the list." }
    }

    let item = items.find(i => i.name.toLowerCase().trim() === newItem.name.toLowerCase().trim())

    if (!item) {
      const res = addItem(newItem)
      if(res.success){
        // alert(res.message)
        item = res.item
      }
    }

    addRelation(item!.id!, listId)
    return { success: true, message: "Item added successfully." }
  }, [listItems, items, addItem, addRelation])

  const removeItemFromList = useCallback((listId: string, itemId: string) => {
    removeRelation(itemId, listId)
    const item = items.find(i => i.id === itemId)
    if (item) {
      if (item.frequency! > 1) {
        updateItem(itemId, { frequency: item.frequency! - 1 })
      } else {
        deleteItem(itemId)
      }
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
    addItemToList: listId ? (newItem: Omit<Item, 'id'>) => addItemToList(listId, newItem) : undefined,
    removeItemFromList: listId ? (itemId: string) => removeItemFromList(listId, itemId) : undefined,
  }
}
