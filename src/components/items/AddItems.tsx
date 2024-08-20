import { useState } from "react"

import { Item } from "@/App"
import CategorySelect from "../CategorySelect"
import { Category } from "@/constants/categories"

interface AddItemsProps {
  addItem?: ((newItem: Item) => {
    item?: Item
    success: boolean
    message: string
  } | undefined) | undefined
  addItemToList?: ((newItem: Item) => {
    success: boolean
    message: string
  } | undefined) | undefined
  placeHolder?: string
}

export default function AddItems({
  addItem,
  addItemToList,
  placeHolder = "Add grocery..."
}: AddItemsProps) {
  const [newItemName, setNewItemName] = useState("")
  const [showCategorySelect, setShowCategorySelect] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.None)

  const handleAddItem = () => {
    if (!newItemName.trim()) return

    const newItem: Item = {
      id: "",
      name: newItemName,
      category: selectedCategory ?? Category.None
    }

    if(addItemToList !== undefined) {
      const res = addItemToList(newItem)
      if(res?.success){
        alert(res.message)
      }
    }
    if(addItem !== undefined) {
      addItem(newItem)
    }
    setNewItemName("")
    setSelectedCategory(Category.None)
    setShowCategorySelect(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') handleAddItem()
  }

  const handleCategoryChange = (newCategory: Category) => {
    setSelectedCategory(newCategory)
  }

  return (
    <div id="addItems">
      <input
        type="text"
        placeholder={placeHolder}
        autoFocus
        value={newItemName}
        onKeyDown={handleKeyPress}
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

      <button className="secondaryBtn" onClick={handleAddItem}>Add Item</button>
    </div>
  )
}