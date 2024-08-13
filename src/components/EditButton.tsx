import { useState } from "react"
import Popup from "./Popup"

interface EditButtonProps {
  onSubmit: (newName: string) => void
  label?: string
  placeHolder?: string
}

export default function EditButton({
  onSubmit,
  label = "",
  placeHolder = "Type a new name..."
}: EditButtonProps) {

  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState("")

  const handleSubmit = () => {
    onSubmit(name)
    setShowForm(false)
  }

  return (
    <>
      <button
        className="delete"
        onClick={() => setShowForm(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" strokeWidth={1} fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
      </button>

      {showForm ? (
        <Popup
          isOpen={showForm}
          onClose={() => setShowForm(false)}
          label={label}
        >
          <>
          <input
            type="text"
            placeholder={placeHolder}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleSubmit}>Save</button>
          </>
        </Popup>
      ) : null}


    </>
  )
}


