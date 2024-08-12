import { ReactNode, MouseEvent } from "react"

interface PopupProps {
  isOpen: boolean
  onClose: () => void
  label: string
  children: ReactNode
}

export default function Popup({
  isOpen,
  onClose,
  label,
  children
}: PopupProps) {

  if(!isOpen) return null

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if(e.target === e.currentTarget){
      onClose()
    }
  }

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-content">
        <span>{label}</span>
        <div className="popup-buttons">
          {children}
        </div>
      </div>
    </div>
  )
}
