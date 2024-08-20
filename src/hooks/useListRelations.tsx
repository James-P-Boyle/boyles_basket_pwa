import { useCallback } from "react"

import useLocalStorage from "./useLocalStorage"

export type UseListRelations = {
  itemId: string
  listId: string
}

export default function useListRelations() {
  const [relations, setRelations] = useLocalStorage<UseListRelations[]>('itemListRelations', [])

  const addRelation = useCallback((itemId: string, listId: string) => {
    setRelations(prev => {
      if(prev.some(rel => rel.itemId === itemId && rel.listId === listId)) {
        return prev
      }
      return [...prev, {itemId, listId}]
    })
  }, [setRelations])

  const removeRelation = useCallback((itemId: string, listId: string) => {

    setRelations(prev => prev.filter(rel => rel.itemId === itemId && rel.listId === listId))
  }, [setRelations])

  return {
    relations,
    addRelation,
    removeRelation
  }
}