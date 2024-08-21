import { Link } from "react-router-dom"

import useList from "@/hooks/useList"

export default function Index() {
  /* Fix useList("") */
  const {lists } = useList("")

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
