import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav= () => {

  const activeStyle = {
    color: 'white',
    backgroundColor: '#EB5646',
    // borderTop: 'groove black 1px',
    // borderLeft: 'groove black 1px',
    // borderRight: 'groove black 1px',
    // borderBottom: 'none',
    // borderRadius: '5px 5px 0px 0px'
  }

  return (
    <nav>
      <ul className='nav-ul'>
        <li className='nav-li'>
          <NavLink
            to='/'
            exact
            activeStyle={activeStyle}
            className='nav-link'
            >
              Home
          </NavLink>
        </li>
        <li className='nav-li'>
          <NavLink
            to='/about'
            activeStyle={activeStyle}
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