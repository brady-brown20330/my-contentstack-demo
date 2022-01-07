import React from 'react';
import Nav from './Nav';
// import { onEntryChange } from "../utils";
import Axios from 'axios';

const Header = (props) => {
  const [data, setData] = React.useState({});

  // const updateData = () => {

  //   const fetchedData = Axios.get('https://cdn.contentstack.io/v3/content_types/header/entries/blta059543334da4463?api_key=blta80ffe6a4d78d787&access_token=&environment=production&locale=en-us')
  //   setData(fetchedData);
  //   console.log('the newness: ', fetchedData)
  // };

  // React.useEffect(() => {
  //   onEntryChange(updateData);
  // }, []);

  return (
    <div className='header-container'>
      <h1 className='header-title'>{props.title}</h1>
      <div className='header-subtext'>{props.subtext}</div>
      <Nav />
    </div>
  )
}

export default Header;