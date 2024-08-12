import { useContext } from "react"
import { HeaderContext } from "../contexts/HeaderContext"

export default function Header() {
  const headerContext = useContext(HeaderContext)
  return (
    <header>
      {headerContext?.headerContent}
    </header>
  )
};
