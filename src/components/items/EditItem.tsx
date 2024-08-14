import { Item } from "@/App"
import { useState } from "react"
import CategorySelect from "../CategorySelect"
import { Category } from "@/constants/categories"

interface EditItemProps {
  item: Item
  handleUpdate: (newItem: Item) => void
}

export default function EditItem({
  item,
  handleUpdate
}: EditItemProps) {

  const [updatedItem, setUpdatedItem] = useState(item)

  const handleCategoryChange = (newCategory: Category) => {
    setUpdatedItem((prev) => ({...prev, category: newCategory}))
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
        className="secondaryButton"
        onClick={() => handleUpdate({...item, ...updatedItem})}
      >
        Save
      </button>
    </div>
  )
};
