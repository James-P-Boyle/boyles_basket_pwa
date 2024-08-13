import { Item } from "@/App"
import DeleteButton from "@components/DeleteButton"
import EditButton from "@components/EditButton"

interface ListItemProps {
  item: Item,
  handleDelete: (id: string) => void
  handleUpdate: (updatedFields: Partial<Item>) => void
}

export default function ListItem({
  item,
  handleDelete,
  handleUpdate
}: ListItemProps) {

  const handleNameUpdate = (newName: string) => {
    handleUpdate({ name: newName })
  }

  return (
    <div className="item">
      <span>
        {item.name}
      </span>

      <div className="item-controls">
        <EditButton
          onSubmit={handleNameUpdate}
          label={`Update "${item.name}"`}
        />
        <DeleteButton
          onCLick={() => handleDelete(item.id)}
        />
      </div>

    </div>
  )
}
