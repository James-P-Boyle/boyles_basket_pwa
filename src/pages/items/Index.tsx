import { Item } from "@/App"
import ListItem from "@/components/items/ListItem"
import AddItems from "@/components/items/AddItems"
import { Category } from '@/constants/categories'
import useItems from "@/hooks/useItems"
import { groupItemsByCategory } from "@/shared/utils"

export default function Index() {

  const {items, addItem, deleteItem, updateItem} = useItems()
  const groupedItems = groupItemsByCategory(items)

  return (
    <div className="list">
      <AddItems
        addItem={addItem}
        placeHolder="Add some groceries"
      />

      <div className="showList">
        {Object.keys(groupedItems).map((categoryKey: string) => {

          const category = categoryKey as Category
          const items: Partial<Item>[] = groupedItems[category]

          if(items.length == 0) return null

          return (
            <div className="categoryBlock" key={category}>
              {category !== Category.None && <span className="categoryTitle">{category}</span>}

              {items && items.map((item) => (
                <ListItem
                  key={item.id}
                  item={item}
                  handleDelete={() => deleteItem(item.id!)}
                  handleUpdate={(updatedFields) => updateItem(item.id!, updatedFields)}
                />
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}
