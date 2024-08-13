import { Link } from "react-router-dom"

import useList from "@/hooks/useList"
import CreateList from '@components/lists/Create'

export default function Index() {

  const {lists, addNewList} = useList()

  return (
    <>

      <CreateList addNewList={addNewList} />

      <ul className="list">
        {lists.map((l) => (
          <Link className="listLink" to={`/list/${l.id}`} key={l.id}>
            <span>{l.name}</span>
          </Link>
        ))}
      </ul>

    </>
  )
};
