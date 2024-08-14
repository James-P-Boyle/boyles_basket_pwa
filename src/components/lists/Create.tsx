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
      <button
        className="roundedButton"
        onClick={handleCreateList}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </button>
    </div>
  )
}
