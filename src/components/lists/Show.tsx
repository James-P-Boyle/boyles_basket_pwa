import { useParams } from "react-router-dom"
import AddItems from "./AddItems"
import ListItem from "./ListItem"
import useList from "../../hooks/useList"

export default function Show() {
  const { id } = useParams<{ id: string }>()
  const { list, addNewItem, deleteItem } = useList(id!)

  if(!list){
    return (
      <div>List Not Found</div>
    )
  }

  return (
    <div id="show">

      <div className="showHead">
        <div>
          <span className="date">{new Date(list.createdAt).toLocaleDateString()}</span>
          <h1>{list.name}</h1>
        </div>

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
            />
          ))
        )}
      </div>
    </div>
  )
}
