import { useParams } from "react-router-dom"
import useLocalStorage from "../../hooks/useLocalStorage"
import { Item, List } from '../../App'
import AddItems from "./AddItems"
import { useState } from "react"
import ListItem from "./ListItem"

export default function Show() {
  const { id } = useParams<{ id: string }>()
  const [ lists, setLists ] = useLocalStorage<List[]>('lists', {})

  const [newItem, setNewItem] = useState<Item[] | null>([])

  const list: List | undefined = lists.find(list => list.id == id)

  const addNewItem = (newItem: Item) => {
    setNewItem((prevItems) => prevItems ? [...prevItems, newItem] : [newItem])
    updateList(newItem)
  }

  const updateList = (newItem: Item) => {
    if (!list) return

    const updatedList: List = {
      ...list,
      items: [...list.items, newItem],
    }
    const updatedLists = lists.map((l) => (l.id === list.id ? updatedList : l))
    setLists(updatedLists)
  }

  const deleteItem = (item: Item) => {
    if (!list) return

    const updatedItem = list.items.filter(i => i !== item)
    const updatedList: List = {
      ...list,
      items: updatedItem
    }

    const updatedLists = lists.map(l => l.id === list.id ? updatedList : l)
    setLists(updatedLists)
  }

  if(!list){
    return (
      <div>List Not Found</div>
    )
  }

  return (
    <div id="show">

      <div className="showHead">
        <span className="date">{new Date(list.createdAt).toLocaleDateString()}</span>
        <h1>{list.name}</h1>

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
