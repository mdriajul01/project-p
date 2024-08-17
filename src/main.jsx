import React from 'react'
import { StrictMode } from 'react'
import {ReactDOM } from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Home/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Registration from './components/Firebase/Auth/Registration.jsx'
import Login from './components/Firebase/Auth/Login.jsx'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/registration",
        element: <Registration></Registration>

      },
      {
        path: "/login",
        element: <Login></Login>
      }

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}>
    <App />
    </RouterProvider>
  </React.StrictMode>,

)
