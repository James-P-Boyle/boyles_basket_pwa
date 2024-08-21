import useList from "@/hooks/useList"
import { useParams } from "react-router-dom"
import ListHead from "./ListHead"
import ListComponent from "./ListComponent"
import AddItems from "../items/AddItems"

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


};
