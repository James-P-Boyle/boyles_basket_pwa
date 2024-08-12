import { ReactNode } from "react"
import { Link } from "react-router-dom"

interface HeaderProps {
  children: ReactNode
}

export default function Header({
  children
}: HeaderProps) {
  return (
    <header>
      <Link to="/" title="Go to main overview">
        Sh
      </Link>

      <div>
        {children}
      </div>
    </header>
  )
};
