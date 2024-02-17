import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routers from './assets/components/Routers.jsx'
import AppContext from './AppContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
    <RouterProvider router={Routers}></RouterProvider>
    </AppContext>
  </React.StrictMode>,
)
