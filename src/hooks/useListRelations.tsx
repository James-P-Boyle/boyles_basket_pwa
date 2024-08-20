import { useCallback } from "react"

import useLocalStorage from "./useLocalStorage"

export type UseListRelations = {
  itemId: string
  listId: string
}

export default function useListRelations() {
  const [relations, setRelations] = useLocalStorage<UseListRelations[]>('itemListRelations', [])

  const addRelation = useCallback((itemId: string, listId: string) => {

    try {
      setRelations(prev => {
        if(prev.some(rel => rel.itemId === itemId && rel.listId === listId)) {
          return prev
        }
        return [...prev, {itemId, listId}]
      })
      return { success: true, message: "Item added successfully." }
    } catch (error) {
      console.log(error)
      return { success: false, message: "Something went wrong" }
    }
  }, [setRelations])

  const removeRelation = useCallback((itemId: string, listId: string) => {
    try {
      setRelations(prev => prev.filter(rel => rel.itemId === itemId && rel.listId === listId))
      return { success: true, message: "Item removed successfully." }
    } catch (error) {
      return { success: false, message: "Something went wrong" }
    }
  }, [setRelations])

  return {
    relations,
    addRelation,
    removeRelation
  }
}