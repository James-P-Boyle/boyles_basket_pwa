import { Item } from "@/App"
import { Category } from "@/constants/categories"
import { groupItemsByCategory } from "@/shared/utils"
import { useMemo } from "react"
import ListItem from "../items/ListItem"

interface ListComponentProps {
  listItems: Item[]
  removeItemFromList?: (itemId: string) => void | null
  withControls?: boolean
  children?: React.ReactNode
}

export default function ListComponent({
  listItems,
  removeItemFromList,
  withControls = false,
  children
} : ListComponentProps) {

  const groupedItems = useMemo(() => groupItemsByCategory(listItems), [listItems])

  return (
    <div className="list">

      <>
        {children && children}
      </>

      <div className="showList">
        {listItems.length === 0 ? (
          "add some groceries"
        ) : (
          Object.keys(groupedItems).map((categoryKey: string) => {

            const category = categoryKey as Category
            const items: Item[] = groupedItems[category]

            if (items.length === 0) return null

            return (
              <div className="categoryBlock" key={category}>
                {category !== Category.None && <span className="categoryTitle">{category}</span>}

                {items && items.map((item) => (
                  <ListItem
                    key={item.id}
                    item={item}
                    withControls={withControls}
                    handleDelete={() => removeItemFromList ? removeItemFromList(item.id) : {}}
                    handleUpdate={() => {}}
                  />
                ))}
              </div>
            )
          })

        )}
      </div>
    </div>
  )
};
