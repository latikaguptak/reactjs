import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Header() {
  return (
    <>
    <h1>Header</h1>
    <NavLink to='/'
      className={({isActive })=> 
        `bg-gray-200 p-4 m-10  rounded-2xl      ${isActive? "text-orange-700" :"text-gray-700"}`}
    >Home</NavLink>
    <NavLink to='/About'
      className={({isActive })=> 
        `bg-gray-200 p-4 m-10  rounded-2xl  ${isActive? 'text-orange-700' :"text-gray-700"}`}
    >About</NavLink>
    <NavLink to='/Contact'
      className={({isActive })=> 
        `bg-gray-200 p-4 m-10  rounded-2xl  ${isActive? 'text-orange-700' :"text-gray-700"}`}
    >Contact</NavLink>
    </>
  )
}

export default Header