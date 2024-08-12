import { Item } from "../../App";
import DeleteButton from "../DeleteButton";

interface ListItemProps {
  item: Item,
  handleDelete: (item: Item) => void
}

export default function ListItem({
  item,
  handleDelete
}: ListItemProps) {
  return (
    <div className="item">
      <span>
        {item.name}
      </span>
      <DeleteButton
        onCLick={() => handleDelete(item)}

      />
    </div>
  )
};
