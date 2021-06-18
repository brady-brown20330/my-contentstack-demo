import React from 'react';
import Nav from './Nav';

const Header = (props) => {

  return (
    <div>
      <h1>{props.title}</h1>
      <div>{props.subtext}</div>
      <Nav />
    </div>
  )
}

export default Header;