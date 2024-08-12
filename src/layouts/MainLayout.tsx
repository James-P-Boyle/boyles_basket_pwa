import { ReactNode } from "react"
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

interface MainLayoutProps {
  header: ReactNode
  children: ReactNode
}

export default function MainLayout({
  header,
  children
}: MainLayoutProps) {


  return (
    <>
      <BackButton />
      <header>
        {header}
      </header>
      <main>
        {children}
      </main>
    </>
  )
};
