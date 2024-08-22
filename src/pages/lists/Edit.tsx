import { useParams } from "react-router-dom"

import ListHead from "@/components/lists/ListHead"
import ListComponent from "@/components/lists/ListComponent"
import AddItems from "@/components/items/AddItems"
import useList from "@/hooks/useList"

export default function Edit() {
  const { id: listId } = useParams<{ id: string }>()

  const {
    list,
    listItems,
    deleteList,
    addItemToList,
    removeItemFromList
  } = useList(listId)

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

      <ListComponent
        listItems={listItems}
        withControls
        removeItemFromList={removeItemFromList}
      >
        <AddItems addItemToList={addItemToList} />
      </ListComponent>
    </>
  )
}
