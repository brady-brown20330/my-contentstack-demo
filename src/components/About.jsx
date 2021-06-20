import React from 'react';

const About = (props) => {
  console.log('props in about: ', props.about)
    return props.about.modular_blocks.map((block, index) => {
      
      return (
        <div className='blog-copy' key={`container_div_${index}`}>
          <h1 className='blog-header' key={`header_${index}`}>{block.about_me.header}</h1>
          <p className='blog-paragraph' key={`paragraph_${index}`}>{block.about_me.about_me}</p>
          <ul key={`list_${index}`}>
            {
              block.about_me.list_items.map((item, index) => <li key={`listitem_${index}`}>{item}</li>)
            }
          </ul>
        </div>
      )
    })
}

export default About;