import { useState } from "react"

import { Item } from "@/App"
import CategorySelect from "@components/CategorySelect"
import { Category } from "@/constants/categories"

interface EditItemProps {
  item: Partial<Item>
  handleUpdate: (newItem: Partial<Item>) => void
  closeForm?: () => void
}

export default function EditItem({
  item,
  handleUpdate,
  closeForm
}: EditItemProps) {

  const [updatedItem, setUpdatedItem] = useState(item)

  const handleCategoryChange = (newCategory: Category) => {
    setUpdatedItem((prev) => ({...prev, category: newCategory}))
  }

  const handleSave = () => {
    handleUpdate({...item, ...updatedItem})
    closeForm && closeForm()
  }

  return (
    <div id="editItem">
      <CategorySelect
        value={updatedItem.category!}
        onChange={handleCategoryChange}
      />
      <input
        type="text"
        placeholder={item.name}
        required
        onChange={(e) => setUpdatedItem((prev) => ({...prev, name: e.target.value}))}
      />
      <button
        className="secondaryBtn"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  )
}
