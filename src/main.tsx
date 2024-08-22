import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from '@/App.tsx'
import { BASEURL } from '@/constants/constants'
import '@/scss/app.scss'

const root: HTMLElement = document.getElementById('root')!

createRoot(root).render(
  <StrictMode>
    <BrowserRouter basename={BASEURL}>
      <App />
    </BrowserRouter>
  </StrictMode>
)
