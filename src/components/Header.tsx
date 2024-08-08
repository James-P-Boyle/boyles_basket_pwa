import { ReactNode } from "react"

interface HeaderProps {
  children: ReactNode
}

export default function Header({
  children
}: HeaderProps) {
  return (
    <header>
      <span>Shopping List Tracker</span>

      <div>
        {children}
      </div>
    </header>
  )
};
