import { Item } from "@/App"
import EditItem from "@components/items/EditItem"
import DeleteButton from "@/components/buttons/DeleteButton"
import EditButton from "@/components/buttons/EditButton"
import { capitalizeFirstLetter } from '@/shared/utils'

interface ListItemProps {
  item: Partial<Item>,
  handleDelete: () => void
  handleUpdate: (updatedFields: Partial<Item>) => void
  withControls?: boolean
}

export default function ListItem({
  item,
  handleDelete,
  handleUpdate,
  withControls = false
}: ListItemProps) {

  const handleItemUpdate = (updatedItem: Partial<Item>) => {
    handleUpdate(updatedItem)
  }

  return (
    <div className="item">
      <span>
        {capitalizeFirstLetter(item.name!)}
      </span>

      {withControls && (
        <div className="item-controls">
          <EditButton
            label={`Update "${item.name}"`}
            title={`Update "${item.name}"`}
            popupForm={<EditItem item={item} handleUpdate={handleItemUpdate}/>}
          />

          <DeleteButton
            onClick={handleDelete}
            title={`Delete "${item.name}"`}
          />
        </div>
      )}
    </div>
  )
}
