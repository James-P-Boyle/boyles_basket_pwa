import { ReactNode } from "react"

import Nav from "@/partials/Nav"

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({
  children
}: MainLayoutProps) {

  return (
    <>

      <Nav />
      <main>
        {children}
      </main>
    </>
  )
}
