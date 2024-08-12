import { v4 as uuid} from 'uuid'
import { List } from "../../App"
import InputToggleButton from "../InputToggleButton"
import { useNavigate } from "react-router-dom"

interface CreateProps {
  addNewList: (newList: List) => void
}
export default function Create({
  addNewList
}: CreateProps) {

  const navigate = useNavigate()

  const handleCreateList = (listName: string) => {
    if(!listName.trim()) return

    const listId = uuid()

    const newList: List = {
      id: listId,
      name: listName,
      createdAt: new Date(),
      items: []
    }

    addNewList(newList)
    // navigate(`/list/${listId}`)
  }

  return (
    <div id="createList">
      <InputToggleButton
        ctaLabel="Create New"
        submitLabel="Continue..."
        placeholderText="New list name"
        onSave={handleCreateList}
      />
    </div>
  )
}
