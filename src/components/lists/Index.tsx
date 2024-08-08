import { Link } from "react-router-dom"
import { List } from "../../App"

interface IndexProps {
  lists: List[]
}

export default function Index({
  lists
}: IndexProps) {

  return (
    <ul className="list">
      {lists.map((l) => (
        <Link className="listLink" to={`/list/${l.id}`} key={l.id}>
          <span>{l.name}</span>
        </Link>
      ))}
    </ul>
  )
};
