import React from 'react';

const Footer = (props) => {
  
  return (
    <div className='footer-container'>
      <div>{props.location.address}</div>

      <div className="social-container">
        {
          props.social.social_links.map((link => {
            return (
              <div className='social-item' key={link._metadata.uid}>
                <a className='social-link' href={link.url.href}>{link.title}</a>
              </div>
            )
          }))
        }
      </div>
    </div>
  )
}

export default Footer;