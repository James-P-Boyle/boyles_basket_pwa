import { Link } from "react-router-dom"
import { List } from "../App"

interface AllListsProps {
  lists: List[]
}

export default function AllLists({
  lists
}: AllListsProps) {

  return (
    <>
      <h2>Lists</h2>
      <ul>
        {lists && lists.map((l) => (
          <Link to={`/list/${l.id}`} key={l.id}>
            <span>{l.name}</span>
          </Link>
        ))}
      </ul>
    </>
  )
};
