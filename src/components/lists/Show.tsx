import { useContext, useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"

import AddItems from "@/components/items/AddItems"
import ListItem from "@/components/items/ListItem"
import DeleteButton from "@components/DeleteButton"
import { Item, List } from "@/App"

import useList from "@/hooks/useList"
import { HeaderContext } from "@/contexts/HeaderContext"
import { groupItemsByCategory } from "@/shared/utils"
import { Category } from "@/constants/categories"
import useItems from "@/hooks/useItems"
import useListRelations from "@/hooks/useListRelations"
import EditButton from "../EditButton"

export default function Show() {
  const { id: listId } = useParams<{ id: string }>()
  const {
    list,
    listItems,
    deleteList,
    addItemToList,
    removeItemFromList,
    updateListName
  } = useList(listId)

  const headerContext = useContext(HeaderContext)

  useEffect(() => {
    if(!list) return
    headerContext?.setHeaderContent(
      <ShowHeader
        list={list}
        deleteList={deleteList}
        updateListName={updateListName}
      />
    )
    return () => headerContext?.setHeaderContent(null)
  }, [list, deleteList, updateListName, headerContext])

  const groupedItems = useMemo(() => groupItemsByCategory(listItems), [listItems])

  if(!list){
    return (
      <div>List Not Found</div>
    )
  }

  return (
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
                    handleDelete={() => removeItemFromList && removeItemFromList(item.id!)}
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
}

const ShowHeader = ({
  list,
  deleteList,
  updateListName
} : {
  list: List,
  deleteList: (listId: string) => void,
  updateListName: (listId: string, newName: string) => void
}) => {

  return (
    <>
      <div className="listTitle">
        <h1>{list!.name}</h1>
        <DeleteButton
          onClick={() => deleteList(list!.id!)}
          confirmBeforeDelete
          deleteMessage="Are you sure you want to delete this list?"
        />
      </div>
    </>
  )
}