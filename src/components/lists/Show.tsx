import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"

import AddItems from "@/components/items/AddItems"
import ListItem from "@/components/items/ListItem"
import DeleteButton from "@components/DeleteButton"
import { Item, List } from "@/App"

import useList from "@/hooks/useList"
import { HeaderContext } from "@/contexts/HeaderContext"
import { groupItemsByCategory } from "@/shared/utils"
import { Category } from "@/constants/categories"


export default function Show() {
  const { id } = useParams<{ id: string }>()
  const { list, addNewItem, deleteItem, deleteList, updateItem } = useList(id!)
  const headerContext = useContext(HeaderContext)

  useEffect(() => {
    if(!list) return
    headerContext?.setHeaderContent(
      <ShowHeader
        list={list}
        deleteList={deleteList}
      />
    )
    return () => headerContext?.setHeaderContent(null)
  }, [list, deleteList])

  if(!list){
    return (
      <div>List Not Found</div>
    )
  }

  const groupedItems = groupItemsByCategory(list)

  return (
    <div id="show">

      <div className="showHead">
        <AddItems onAddItem={addNewItem} />
      </div>

      <div className="showList">
        {list.items.length === 0 ? (
          "add some groceries"
        ) : (
          Object.keys(groupedItems).map((categoryKey: string) => {
            const category = categoryKey as Category
            const items: Item[] = groupedItems[category]

            if (items.length === 0) return null

            return (
              <div id="categoryBlock" key={category}>
                {category !== Category.None && <span id="categoryTitle">{category}</span>}

                {items.map((item) => (
                  <ListItem
                    key={item.id}
                    item={item}
                    handleDelete={() => deleteItem(item.id)}
                    handleUpdate={(updatedFields) => updateItem(item.id, updatedFields)}
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
  deleteList
} : {
  list: List,
  deleteList: (listId: string) => void
}) => {
  return (
    <>
      <div className="listTitle">
        {/* <EditButton
          onSubmit={updateListName}
          label={`Rename "${list.name}"`}
        /> */}
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