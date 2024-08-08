import { useParams } from "react-router-dom"
import useLocalStorage from "../hooks/useLocalStorage"
import { List } from "../App"

export default function ShowList() {
  const { id } = useParams<{ id: string }>()
  const [ lists ] = useLocalStorage<List[]>('lists', {})

  const list: List | undefined = lists.find(list => list.id == id)

  if(!list){
    return (
      <div>List Not Found</div>
    )
  }

  return (
    <div id="showList">
      <span className="date">{new Date(list.createdAt).toLocaleDateString()}</span>
      <h1>{list.name}</h1>
    </div>
  )
};
