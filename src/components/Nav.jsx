import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav= () => {

  return (
    <nav>
      <ul>
        <li className='nav-item'>
          <NavLink
            to='/'
            className='nav-link'
            >
              Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            to='/about'
            className='nav-link'
            >
              About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;