import { Link } from "react-router-dom"

import useList from "@/hooks/useList"
import CreateList from '@components/lists/Create'
import { useContext, useEffect } from "react"
import { HeaderContext } from "@/contexts/HeaderContext"

export default function Index() {

  const {lists, addNewList} = useList()
  const headerContext = useContext(HeaderContext)

  useEffect(() => {
    headerContext?.setHeaderContent(
      <CreateList addNewList={addNewList} lists={lists} />
    )
    return () => headerContext?.setHeaderContent(null)
  }, [])

  return (
    <>
      <ul>
        {lists && lists.map((l) => (
          <Link className="listLink" to={`/list/${l.id}`} key={l.id}>
            <span>{l.name}</span>
          </Link>
        ))}
      </ul>

    </>
  )
};
