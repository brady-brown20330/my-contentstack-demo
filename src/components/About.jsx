import React from 'react';

const About = (props) => {
  console.log('props in about: ', props.about)
    return props.about.modular_blocks.map((block) => {
      let header = block.about_me.header
      let paragraph = block.about_me.about_me
      let listItems = block.about_me.list_items
      
      return (
        <div>
          <h1>{header}</h1>
          <p>{paragraph}</p>
          <ul>
            {
              listItems.map(item => <li>{item}</li>)
            }
          </ul>
        </div>
      )
    })
}

export default About;