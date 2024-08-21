import { useMemo } from "react"
import { useParams } from "react-router-dom"

import AddItems from "@/components/items/AddItems"
import ListItem from "@/components/items/ListItem"
import DeleteButton from "@components/DeleteButton"
import { Item, List } from "@/App"

import useList from "@/hooks/useList"
import { groupItemsByCategory } from "@/shared/utils"
import { Category } from "@/constants/categories"
import ListHead from "./ListHead"

export default function Show() {
  const { id: listId } = useParams<{ id: string }>()

  const {
    list,
    listItems,
    deleteList,
    addItemToList,
    removeItemFromList,
    updateListName
  } = useList(listId!)

  const groupedItems = useMemo(() => groupItemsByCategory(listItems), [listItems])

  if(!list){
    return (
      <div>List Not Found</div>
    )
  }

  return (
    <>
      <ListHead
        list={list}
        handleDelete={() => deleteList(list!.id!)}
      />

      <div className="list">

        <AddItems addItemToList={addItemToList} />

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
                      handleDelete={() => removeItemFromList(item.id!)}
                      handleUpdate={() => {}}
                    />
                  ))}
                </div>
              )
            })

          )}
        </div>
      </div>
    </>

  )
}
