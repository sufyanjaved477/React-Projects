import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <ul className='text-center p-3 bg-gray-900 text-white '>
        <NavLink className={(e) => e.isActive? 'red' : ''} to="/"><li>Home</li></NavLink>
        <NavLink className={(e) => e.isActive? 'red' : ''} to="/about"><li>About</li></NavLink>
        <NavLink className={(e) => e.isActive? 'red' : ''} to="/login"><li>Login</li></NavLink>

      </ul>
    </div>
  )
}

export default Navbar
