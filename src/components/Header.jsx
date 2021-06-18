import React from 'react';
import Nav from './Nav';

const Header = (props) => {

  return (
    <div className='header-container'>
      <h1 className='header-title'>{props.title}</h1>
      <div className='header-subtext'>{props.subtext}</div>
      <Nav />
    </div>
  )
}

export default Header;