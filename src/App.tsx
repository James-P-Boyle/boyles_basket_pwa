
import { Route, Routes } from 'react-router-dom'

import ListIndex from '@components/lists/Index'
import ShowList from '@components/lists/Show'
import RouterOutlet from '@/layouts/RouterOutlet'
import Header from '@/partials/Header'
import MainLayout from '@/layouts/MainLayout'
import { HeaderProvider } from '@/contexts/HeaderContext'
import { Category } from '@/constants/categories';

export interface List {
  id: string
  name: string
  createdAt: Date
  items: Item[]
}

export interface Item {
  id: string
  name: string
  price?: number
  isPurchased?: boolean
  category?: Category
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
          </Route>
        </Routes>
      </MainLayout>
    </HeaderProvider>
  )
}

export default App
