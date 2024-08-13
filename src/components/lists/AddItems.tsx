import { useState } from "react"
import { v4 as uuid} from 'uuid'

import { Item } from "@/App"
import CategorySelect from "../CategorySelect"
import { Category } from "@/constants/categories"

interface AddItemsProps {
  onAddItem: (item: Item) => void
}

export default function AddItems({ onAddItem }: AddItemsProps) {
  const [newItemName, setNewItemName] = useState("")
  const [showCategorySelect, setShowCategorySelect] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.None)

  const handleAddItem = () => {
    if (!newItemName.trim()) return

    const itemId = uuid()
    const newItem: Item = {
      id: itemId,
      name: newItemName,
      category: selectedCategory === Category.None ? undefined : selectedCategory
    }

    onAddItem(newItem)
    setNewItemName("")
    setSelectedCategory(Category.None)
    setShowCategorySelect(false)
  }

  const handleCategoryChange = (newCategory: Category) => {
    setSelectedCategory(newCategory)
  }

  return (
    <div id="addItems">
      <input
        type="text"
        placeholder="Add grocery..."
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
      />

      {showCategorySelect ? (
        <CategorySelect
          value={selectedCategory}
          onChange={handleCategoryChange}
        />
      ) : (
        <button id="showCategorySelect" onClick={() => setShowCategorySelect(true)}>Category</button>
      )}

      <button onClick={handleAddItem}>Add Item</button>
    </div>
  )
}