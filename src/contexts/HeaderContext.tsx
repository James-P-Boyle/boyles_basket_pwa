import { createContext, ReactNode, useState } from "react"

interface HeaderContextType {
  setHeaderContent: (content: ReactNode) => void
  headerContent: ReactNode
}

export const HeaderContext = createContext<HeaderContextType | undefined>(undefined)

export const HeaderProvider: React.FC<{children: ReactNode}> = ({children}) => {

  const [headerContent, setHeaderContent] = useState<ReactNode>(null)

  return (
    <HeaderContext.Provider value={{ headerContent, setHeaderContent }}>
      {children}
    </HeaderContext.Provider>
  )
}