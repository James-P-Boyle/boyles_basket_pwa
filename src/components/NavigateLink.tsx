import { NavLink } from "react-router-dom"

interface NavigateLinkProps {
  to: string
  className?: string
  title?: string
  children: React.ReactNode
}

export default function NavigateLink({
  to,
  className,
  title = "",
  children,
} : NavigateLinkProps) {

  return (
    <NavLink
      to={to}
      title={title}
      className={({ isActive }) => `navLink ${className} ${isActive ? 'activeLink' : ''}`}
    >
      {children}
    </NavLink>
  )
}
