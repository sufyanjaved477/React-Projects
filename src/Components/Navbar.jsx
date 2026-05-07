import React from 'react'
<<<<<<< HEAD

function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>
=======
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <ul className='text-center p-3 bg-gray-900 text-white '>
        <NavLink className={(e) => e.isActive? 'red' : ''} to="/"><li>Home</li></NavLink>
        <NavLink className={(e) => e.isActive? 'red' : ''} to="/about"><li>About</li></NavLink>
        <NavLink className={(e) => e.isActive? 'red' : ''} to="/login"><li>Login</li></NavLink>

      </ul>
>>>>>>> 64de79bce031613c8bfa75724442b477959630ba
    </div>
  )
}

export default Navbar
