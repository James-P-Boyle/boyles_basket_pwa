import { v4 as uuid} from 'uuid'

import { List } from "@/App"
import { generateUniqueListName, getWeekNumber } from '@/shared/utils'

interface CreateProps {
  addNewList: (newList: List) => void
  lists: List[]
}
export default function Create({
  addNewList,
  lists
}: CreateProps) {

  const handleCreateList = () => {
    const listId = uuid()

    const currentDate = new Date()
    const weekNumber = getWeekNumber(currentDate)

    let baseName = `Week ${weekNumber}`
    let name = generateUniqueListName(lists, baseName)

    const newList: List = {
      id: listId,
      name,
      createdAt: currentDate,
      items: []
    }

    addNewList(newList)
  }

  return (
    <div id="createList">
      <button onClick={handleCreateList}>
        Create New List
      </button>
    </div>
  )
}
