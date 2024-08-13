import { useParams } from "react-router-dom"
import AddItems from "./AddItems"
import ListItem from "./ListItem"
import useList from "../../hooks/useList"
import { useContext, useEffect } from "react"
import { HeaderContext } from "../../contexts/HeaderContext"
import DeleteButton from "../DeleteButton"
import EditButton from "../EditButton"

export default function Show() {
  const { id } = useParams<{ id: string }>()
  const { list, addNewItem, deleteItem, deleteList, updateListName, updateItems } = useList(id!)
  const headerContext = useContext(HeaderContext);

  const handleListNameChange = (newName: string) => {
    updateListName(newName)
  }

  const handleUpdateItem = (item: string) => {
    updateItems(item)
  }

  useEffect(() => {
    if(!list) return
    headerContext?.setHeaderContent(
      <>
        <span className="date">{new Date(list!.createdAt).toLocaleDateString()}</span>
        <div className="listTitle">
        <EditButton
          onSubmit={handleListNameChange}
          label={`Rename "${list.name}"`}
        />
        <h1>{list!.name}</h1>
        <DeleteButton
          onCLick={() => deleteList(list!.id!)}
          confirmBeforeDelete
          deleteMessage="Are you sure you want to delete this list?"
        />

        </div>
      </>
    )
    return () => headerContext?.setHeaderContent(null)
  }, [list, deleteList])

  if(!list){
    return (
      <div>List Not Found</div>
    )
  }

  return (
    <div id="show">

      <div className="showHead">
        <AddItems onAddItem={addNewItem} />
      </div>

      <div className="showList">
        {list.items.length === 0 ? (
          "add some groceries"
        ) : (
          list.items.map((item, index) => (
            <ListItem
              key={item.name + index}
              item={item}
              handleDelete={deleteItem}
              listId={list.id}
            />
          ))
        )}
      </div>
    </div>
  )
}
