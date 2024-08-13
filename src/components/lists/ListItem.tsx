import { Item } from "../../App";
import useList from "../../hooks/useList";
import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";

interface ListItemProps {
  item: Item,
  handleDelete: (item: Item) => void
  handleUpdate: (item: string) => void
}

export default function ListItem({
  item,
  handleDelete,
  handleUpdate
}: ListItemProps) {

  return (
    <div className="item">
      <span>
        {item.name}
      </span>

      <div className="item-controls">
        <EditButton
            onSubmit={handleUpdate}
            label={`Update "${item.name}"`}
          />
        <DeleteButton
          onCLick={() => handleDelete(item)}
        />
      </div>

    </div>
  )
};
