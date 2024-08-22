import { CATEGORIES, Category } from "@/constants/categories"

interface CategorySelectProps {
  value: Category
  onChange: (value: Category) => void
  label?: string
}

export default function CategorySelect({
  value,
  onChange,
  label
} : CategorySelectProps) {

  return (
    <div id="category-select">
      {label && (<label htmlFor="category-select">{label}</label>)}
      <select
        value={value}
        autoFocus
        onChange={(e) => onChange(e.target.value as Category)}
      >
        {CATEGORIES.map((category) => (
          <option
            key={category}
            value={category}
          >
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}
