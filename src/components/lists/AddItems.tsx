import { useState } from "react"
import { v4 as uuid} from 'uuid'

import { Item } from "@/App"

interface AddItemsProps {
  onAddItem: (item: Item) => void
}

export default function AddItems({ onAddItem }: AddItemsProps) {
  const [newItemName, setNewItemName] = useState("")

  const handleAddItem = () => {
    if (!newItemName.trim()) return

    const itemId = uuid()
    const newItem: Item = {
      id: itemId,
      name: newItemName,
    }

    onAddItem(newItem)
    setNewItemName("")
  }

  return (
    <div id="addItems">
      <input
        type="text"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  )
}