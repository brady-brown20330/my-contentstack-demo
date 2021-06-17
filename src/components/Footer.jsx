import React from 'react';

const Footer = (props) => {
  
  return (
    <div>
      <div>{props.location.address}</div>

      <div className=" container social-container">
        {
          props.social.social_links.map((link => {
            return (
              <div key={link._metadata.uid}>
                <a href={link.url.href}>{link.title}</a>
              </div>
            )
          }))
        }
      </div>
    </div>
  )
}

export default Footer;