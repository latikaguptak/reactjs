
import './App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import User from './components/User';


function App() {
  

  return (
    <>
    {/* <h3 className='text-rose-700 text-center text-5xl font-semibold'>Latika Gupta</h3> */}
    {/* <Products/> */}
    <Navbar/>
    <User/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default App
