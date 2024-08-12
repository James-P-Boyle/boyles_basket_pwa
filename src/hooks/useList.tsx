import { Item, List } from "../App"
import useLocalStorage from "./useLocalStorage"
import { useCallback, useMemo } from "react"

export default function useList(id?: string) {
  const [lists, setLists] = useLocalStorage<List[]>('lists', {})

  const addNewList = useCallback((newList: List) => {
    setLists(prev => prev ? [newList, ...prev] : [ newList ])
  }, [])

  const list = useMemo(() => lists.find(list => list.id === id), [lists, id])

  const updateLists = useCallback((updatedList: List) => {
    setLists(prevLists => prevLists.map(l => l.id === id ? updatedList : l))
  }, [id])

  const addNewItem = useCallback((newItem: Item) => {
    if (!list) return
    const updatedList: List = {
      ...list,
      items: [...list.items, newItem],
    }
    updateLists(updatedList)
  }, [list, updateLists])

  const deleteItem = useCallback((item: Item) => {
    if (!list) return
    const updatedList: List = {
      ...list,
      items: list.items.filter(i => i !== item),
    }
    updateLists(updatedList)
  }, [list, updateLists])

  return {lists, addNewList, list, addNewItem, deleteItem}
}
