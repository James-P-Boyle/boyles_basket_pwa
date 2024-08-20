import { Item } from "@/App"
import DeleteButton from "@components/DeleteButton"
import EditButton from "@components/EditButton"
import EditItem from "./EditItem"
import { capitalizeFirstLetter } from '../../shared/utils';

interface ListItemProps {
  item: Partial<Item>,
  handleDelete: (id: string) => void
  handleUpdate: (updatedFields: Partial<Item>) => void
}

export default function ListItem({
  item,
  handleDelete,
  handleUpdate
}: ListItemProps) {

  const handleItemUpdate = (updatedItem: Partial<Item>) => {
    handleUpdate(updatedItem)
  }

  return (
    <div className="item">
      <span>
        {capitalizeFirstLetter(item.name!)}
      </span>

      <div className="item-controls">
        <EditButton
          label={`Update "${item.name}"`}
          popupForm={<EditItem item={item} handleUpdate={handleItemUpdate}/>}
        />

        <DeleteButton
          onClick={() => handleDelete(item.id!)}
        />
      </div>

    </div>
  )
}
