import React from 'react';
import { FaLinkedin, FaGithub, FaStrava } from 'react-icons/fa';

const Footer = (props) => {
  
  return (
    <div className='footer-container'>
      <div className='footer-text'>{props.location.address}</div>

      <div className="social-container">
        {
          props.social.social_links.map((link => {
            if (link.title === 'Linkedin') {
              return (
                <div key={`${link.title}_div`} className='social-item'>
                  <a key={`${link.title}_link`} className='social-link' href={link.url.href} target="_blank" rel="noreferrer">
                    <FaLinkedin key={`${link.title}_icon`} className='fa-icon' />
                  </a>
                </div>
              )
            } else if (link.title === 'Github') {
              return (
                <div key={`${link.title}_div`} className='social-item'>
                  <a key={`${link.title}_link`} className='social-link' href={link.url.href} target="_blank" rel="noreferrer">
                    <FaGithub key={`${link.title}_icon`} className='fa-icon' />
                  </a>
                </div>
              ) 
            } else if (link.title === 'Strava') {
              return (
                <div key={`${link.title}_div`} className='social-item'>
                  <a key={`${link.title}_link`} className='social-link' href={link.url.href} target="_blank" rel="noreferrer">
                    <FaStrava key={`${link.title}_icon`} className='fa-icon' />
                  </a>
                </div>
              )
            }
          }))
        }
      </div>
    </div>
  )
}

export default Footer;