import { useState } from "react"

interface InputToggleButtonProps {
  ctaLabel?: string
  submitLabel: string
  placeholderText: string
  onSave: (inputValue: string) => void
}

export default function InputToggleButton({
  ctaLabel,
  submitLabel,
  placeholderText,
  onSave
}: InputToggleButtonProps) {

  const [showInput, setShowInput] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const toggleInput = () => {
    setShowInput(!showInput)
  }

  const handleSave = () => {
    if (!inputValue.trim()) return

    onSave(inputValue)
    setInputValue('')
    toggleInput()
  }

  return (
    <>
      {showInput ? (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={placeholderText}
          />
          <button disabled={!inputValue.length} onClick={handleSave}>{submitLabel}</button>
        </>
      ) : (
        <button onClick={toggleInput}>{ctaLabel}</button>
      )}
    </>
  )
}
