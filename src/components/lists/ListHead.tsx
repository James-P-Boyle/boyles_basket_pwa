import { List } from "@/App"
import DeleteButton from "../DeleteButton"
import NavigateLink from '../NavigateLink'
import EditButton from "../EditButton"

interface ListHeadProps {
  list: List
  handleDelete: () => void | null
  showEditIcon?: boolean
}

export default function ListHead({
  list,
  handleDelete,
  showEditIcon = false
} : ListHeadProps) {

  return (
    <div className="listHead">

      <div className="listHeadLeft">
        {showEditIcon && (
          <NavigateLink to={`/list/edit/${list.id}`}>
            <EditButton title="Edit this list"/>
          </NavigateLink>
        )}
      </div>

      <h1 className="listTitle">{list.name}</h1>

      <div>
        <DeleteButton
          onClick={handleDelete}
          confirmBeforeDelete
          deleteMessage="Are you sure you want to delete this list?"
          rounded
          title={"Delete this list"}
        />
      </div>

    </div>
  )
}
