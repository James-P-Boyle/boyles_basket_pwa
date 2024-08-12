import CreateList from './components/lists/Create'
import { Route, Routes, useNavigate } from 'react-router-dom'
import ListIndex from './components/lists/Index'
import ShowList from './components/lists/Show'
import RouterOutlet from './layouts/RouterOutlet'
import Header from './partials/Header'
import useLocalStorage from './hooks/useLocalStorage'

export interface List {
  name: string
  id: string
  createdAt: Date
  items: Item[]
}

export interface Item {
  name: string
  price?: number
  isPurchased?: boolean
}

function App() {

  const [lists, setLists] = useLocalStorage<List[]>('lists', {})

  const addNewList = (newList: List) => {
    setLists(prev => prev ? [newList, ...prev] : [ newList ])
  }

  return (
    <>
      <Header>
        <CreateList addNewList={addNewList} />
      </Header>

      {!!lists && lists.length && (
        <main>
          <Routes>
            <Route path="/" element={<RouterOutlet />}>
              <Route index element={<ListIndex lists={lists}/>} />
              <Route path="list/:id" element={<ShowList />} />
            </Route>
          </Routes>
        </main>
      )}

    </>
  )
}

export default App
