import React from 'react'
import { Link } from 'react-router-dom';
import '../css/navBar.css'

export default function NavBar() {
  return (
    <div>
      <nav className='general-nav-bar-container'>
        <h2 className='title'>Larapp</h2>
        <div className='links'>
          <Link to='/users'>Users</Link>
          <Link to='/signup'>Sing Up</Link>
          <Link to='/login'>Sing In</Link>
        </div>
      </nav>
    </div>
  )
}
