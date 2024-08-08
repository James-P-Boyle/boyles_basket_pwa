import { useState } from "react"
import { v4 as id} from 'uuid';
import { List } from "../App"

interface CreateListProps {
  setLists: React.Dispatch<React.SetStateAction<List[]>>
}
export default function CreateList({
  setLists
}: CreateListProps) {

  const [showInput, setShowInput] = useState(false)
  const [newListName, setNewListName] = useState('')

  const toggleInput = () => {
    setShowInput(!showInput)
  }

  const addList = () => {
    if(!newListName.trim()) return

    const newList: List = {
      id: id(),
      name: newListName,
      createdAt: new Date(),
      items: []
    }

    setLists(prev => prev ? [...prev, newList] : [newList])
    setNewListName('')
    toggleInput()
  }

  return (
    <div id="createList">
      {showInput && (
        <input
          type="text"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
          placeholder="New list name"
        />
      )}
      {showInput ? (
        <button onClick={addList}>Save Name</button>
      ) : (
        <button onClick={toggleInput}>Create New</button>
      )}
    </div>
  )
};
