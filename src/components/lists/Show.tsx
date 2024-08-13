import { useParams } from "react-router-dom"
import AddItems from "./AddItems"
import ListItem from "./ListItem"
import useList from "../../hooks/useList"
import { useContext, useEffect } from "react"
import { HeaderContext } from "../../contexts/HeaderContext"
import DeleteButton from "../DeleteButton"
import EditButton from "../EditButton"
import { List } from "../../App"

export default function Show() {
  const { id } = useParams<{ id: string }>()
  const { list, addNewItem, deleteItem, deleteList, updateListName, updateItem } = useList(id!)
  const headerContext = useContext(HeaderContext);

  useEffect(() => {
    if(!list) return
    headerContext?.setHeaderContent(
      <ShowHeader
        list={list}
        updateListName={updateListName}
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

  return (
    <div id="show">

      <div className="showHead">
        <AddItems onAddItem={addNewItem} />
      </div>

      <div className="showList">
        {list.items.length === 0 ? (
          "add some groceries"
        ) : (
          list.items.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              handleDelete={() => deleteItem(item.id)}
              handleUpdate={(updatedFields) => updateItem(item.id, updatedFields)}
            />
          ))
        )}
      </div>
    </div>
  )
}

const ShowHeader = ({
  list,
  updateListName,
  deleteList
} : {
  list: List,
  updateListName: (newName: string) => void,
  deleteList: (listId: string) => void
}) => {
  return (
    <>
      <span className="date">{new Date(list!.createdAt).toLocaleDateString()}</span>
      <div className="listTitle">
        <EditButton
          onSubmit={updateListName}
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
}