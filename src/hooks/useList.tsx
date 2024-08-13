import { useNavigate } from "react-router-dom"
import { Item, List } from "../App"
import useLocalStorage from "./useLocalStorage"
import { useCallback, useMemo } from "react"

export default function useList(id?: string) {
  const [lists, setLists] = useLocalStorage<List[]>('lists', {})
  const navigate = useNavigate()

  const addNewList = useCallback((newList: List) => {
    setLists(prev => prev ? [newList, ...prev] : [ newList ])
    setTimeout(() => {
      navigate(`/list/${newList.id}`)
    }, 0)
  }, [setLists])

  const updateListName = useCallback((newName: string) => {
    setLists(prevLists =>
      prevLists.map(list =>
        list.id === id ? { ...list, name: newName } : list
      )
    )
  }, [id, setLists])

  const deleteList = useCallback((listId: string) => {
    setLists(prevLists => prevLists.filter(l => l.id !== listId))
    setTimeout(() => {
      navigate("/")
    }, 0)
  }, [setLists])

  const updateItems = useCallback((updateFn: (items: Item[]) => Item[]) => {
    setLists(prevLists => prevLists.map(list => {
      if (list.id !== id) return list
      const updatedList = {
        ...list,
        items: updateFn(list.items),
      }
      return updatedList
    }))
  }, [id, setLists])

  const addNewItem = useCallback((newItem: Item) => {
    updateItems(items => [...items, newItem])
  }, [updateItems])

  const deleteItem = useCallback((itemToDelete: Item) => {
    updateItems(items => items.filter(item => item !== itemToDelete))
  }, [updateItems])

  const list = useMemo(() => lists.find(list => list.id === id), [lists, id])

  return {lists, list, addNewList, addNewItem, deleteItem, deleteList, updateListName}
}
