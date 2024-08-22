import { useEffect, useMemo, useRef, useState } from 'react'

import { Item, List } from '@/App'
import AddItems from '@/components/items/AddItems'
import ListHead from '@/components/lists/ListHead'
import ListItem from '@/components/items/ListItem'
import { Category } from '@/constants/categories'
import { groupItemsByCategory } from '@/shared/utils'
import useList from '@/hooks/useList'

export default function Create() {

  const [list, setList] = useState<List | null>(null)
  const hasListBeenCreatedRef = useRef(false)

  const {
    addNewList,
    listItems,
    deleteList,
    addItemToList,
    removeItemFromList
  } = useList(list?.id)

  useEffect(() => {
    if(list || hasListBeenCreatedRef.current) return

    hasListBeenCreatedRef.current = true
    const newList = addNewList()
    setList(newList)
  }, [addNewList, list])

  const groupedItems = useMemo(() => groupItemsByCategory(listItems), [listItems])

  if(!list) return null

  return (
    <div>
      {list && (
        <>
          <ListHead
            list={list}
            handleDelete={() => deleteList(list.id)}
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
      )}
    </div>
  )
}

