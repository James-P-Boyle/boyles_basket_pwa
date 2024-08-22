import { useLocation } from "react-router-dom"

export default function BackButton() {
  const location = useLocation()
  const showBackButton = location.pathname !== "/"

  return showBackButton && (
    <button className="backButton">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={3} fill="none">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
      </svg>
    </button>
  )
}
