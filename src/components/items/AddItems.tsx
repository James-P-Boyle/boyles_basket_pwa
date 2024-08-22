import { useState } from "react"

import { Item } from "@/App"
import CategorySelect from "@components/CategorySelect"
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

const initialState = {
  id: "",
  name: "",
  category: Category.None
}

export default function AddItems({
  addItem,
  addItemToList,
  placeHolder = "Add grocery..."
}: AddItemsProps) {

  const [newItem, setNewItem] = useState<Item>(initialState)
  const [showCategorySelect, setShowCategorySelect] = useState(false)

  const handleAddItem = () => {
    if (!newItem.name.trim()) return

    // const newItem: Item = {
    //   id: "",
    //   name: newItemName,
    //   category: selectedCategory ?? Category.None
    // }

    if(addItemToList !== undefined) {
      const res = addItemToList(newItem)
      if(res?.success){
        alert(res.message)
      }
    }
    if(addItem !== undefined) {
      addItem(newItem)
    }
    setNewItem(initialState)
    setShowCategorySelect(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') handleAddItem()
  }

  const handleCategoryChange = (newCategory: Category) => {
    setNewItem(prev => ({...prev, category: newCategory}))
  }

  return (
    <div id="addItems">
      <input
        type="text"
        placeholder={placeHolder}
        autoFocus
        value={newItem.name}
        onKeyDown={handleKeyPress}
        onChange={(e) => setNewItem(prev => ({...prev, name: e.target.value}))}
      />

      {showCategorySelect ? (
        <CategorySelect
          value={newItem.category}
          onChange={handleCategoryChange}
        />
      ) : (
        <button id="showCategorySelect" onClick={() => setShowCategorySelect(true)}>Category</button>
      )}

      <button className="secondaryBtn" onClick={handleAddItem}>Add Item</button>
    </div>
  )
}