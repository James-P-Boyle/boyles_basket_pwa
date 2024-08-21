import { useParams } from "react-router-dom"

import useList from "@/hooks/useList"
import ListHead from "./ListHead"
import ListComponent from "./ListComponent"

export default function Show() {
  const { id: listId } = useParams<{ id: string }>()

  const {
    list,
    listItems,
    deleteList
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
        showEditIcon
        handleDelete={() => deleteList(list!.id!)}
      />

      <ListComponent
        listItems={listItems}
        withControls={false}
      />
    </>

  )
}
