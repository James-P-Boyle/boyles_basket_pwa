import { List } from "@/App"
import DeleteButton from "../DeleteButton"

interface ListHeadProps {
  list: List
  handleDelete: () => void
}

export default function ListHead({
  list,
  handleDelete
} : ListHeadProps) {

  return (
    <div className="listHead">
      <h1>{list.name}</h1>
      <DeleteButton
        onClick={handleDelete}
        confirmBeforeDelete
        deleteMessage="Are you sure you want to delete this list?"
      />
    </div>
  )
}
