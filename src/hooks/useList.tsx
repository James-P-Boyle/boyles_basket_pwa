import { Item, List } from "../App"
import useLocalStorage from "./useLocalStorage"
import { useCallback, useMemo } from "react"

export default function useList(id?: string) {
  const [lists, setLists] = useLocalStorage<List[]>('lists', {})

  const addNewList = useCallback((newList: List) => {
    setLists(prev => prev ? [newList, ...prev] : [ newList ])
  }, [setLists])

  // const updateLists = useCallback((updatedList: List) => {
  //   setLists(prevLists => prevLists.map(l => l.id === id ? updatedList : l))
  // }, [setLists])

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

  return {lists, list, addNewList, addNewItem, deleteItem}
}
