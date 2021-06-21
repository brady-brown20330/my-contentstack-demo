import React from 'react';
import { FaLinkedin, FaGithub, FaStrava } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  
  return (
    <div className='footer-container'>
      <div>{props.location.address}</div>

      <div className="social-container">
        {
          props.social.social_links.map((link => {
            if (link.title === 'Linkedin') {
              return (
                <div key={`${link.title}_div`} className='social-item'>
                  <a key={`${link.title}_link`} className='social-link' href={link.url.href} target="_blank">
                    <FaLinkedin key={`${link.title}_icon`} className='fa-icon' />
                  </a>
                </div>
              )
            } else if (link.title === 'Github') {
              return (
                <div key={`${link.title}_div`} className='social-item'>
                  <a key={`${link.title}_link`} className='social-link' href={link.url.href} target="_blank">
                    <FaGithub key={`${link.title}_icon`} className='fa-icon' />
                  </a>
                </div>
              ) 
            } else if (link.title === 'Strava') {
              return (
                <div key={`${link.title}_div`} className='social-item'>
                  <a key={`${link.title}_link`} className='social-link' href={link.url.href} target="_blank">
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