import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'

function App() {
  // const createBrowserRouter = () => {

  // }
  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Footer/>
    </>
  )
}

export default App
