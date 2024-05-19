import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <h1>404 Not Found</h1>,
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
