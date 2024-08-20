import { useCallback } from "react"
import { v4 as uuid} from 'uuid'

import { Item } from "@/App"
import useLocalStorage from "./useLocalStorage"
import { areStringsEqual } from "@/shared/utils"

export default function useItems() {

  const [items, setItems] = useLocalStorage<Item[]>('items', [])

  const addItem = useCallback((newItem: Item) => {
    const item = items.find(i => areStringsEqual(i.name, newItem.name))

    if (item) {
      return { item: item, success: true, message: "Item already exists." }
    }

    const itemWithId = { ...newItem, id: uuid() }
    setItems(prev => [...prev, itemWithId])
    return { item: itemWithId, success: true, message: "Item added successfully." }
  }, [setItems, items])

  const updateItem = useCallback((itemId: string, updatedItem: Partial<Item>) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId
          ? {...item, ...updatedItem}
          : item
      )
    )
  }, [setItems])

  const deleteItem = useCallback((itemId: string) => {
    setItems(prevItems =>
      prevItems.filter(item => item.id !== itemId)
    )
  }, [setItems])

  return {
    items,
    addItem,
    updateItem,
    deleteItem
  }

}

