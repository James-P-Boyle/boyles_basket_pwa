
import { Route, Routes } from 'react-router-dom'

import ListIndex from '@components/lists/Index'
import ItemIndex from '@components/items/Index'
import ShowList from '@components/lists/Show'
import RouterOutlet from '@/layouts/RouterOutlet'
import Header from '@/partials/Header'
import MainLayout from '@/layouts/MainLayout'
import { HeaderProvider } from '@/contexts/HeaderContext'
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
    <HeaderProvider>
      <MainLayout
        header={<Header />}
      >
        <Routes>
          <Route path="/" element={<RouterOutlet />}>
            <Route index element={<ListIndex />} />
            <Route path="list/:id" element={<ShowList />} />

            <Route path="items" element={<ItemIndex />} />
          </Route>
        </Routes>
      </MainLayout>
    </HeaderProvider>
  )
}

export default App
