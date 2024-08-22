import { Route, Routes } from 'react-router-dom'

import ListIndex from '@/pages/lists/Index'
import EditList from '@/pages/lists/Edit'
import ShowList from '@/pages/lists/Show'
import Create from './pages/lists/Create'
import ItemIndex from '@/pages/items/Index'
import RouterOutlet from '@/layouts/RouterOutlet'
import MainLayout from '@/layouts/MainLayout'
import { Category } from '@/constants/categories'

export interface List {
  id: string
  name: string
  createdAt: Date
  items: Item[]
}

export interface Item {
  name: string
  id: string
  listId?: string
  price?: number
  isPurchased?: boolean
  category: Category
}

function App() {

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<RouterOutlet />}>
          <Route index element={<ListIndex />} />
          <Route path="list/create" element={<Create />}/>
          <Route path="list/edit/:id" element={<EditList />} />
          <Route path="list/:id" element={<ShowList />} />

          <Route path="items" element={<ItemIndex />} />
        </Route>
      </Routes>
    </MainLayout>
  )
}

export default App
