import React from 'react';
import TextLogo from '../assets/textlogo.png';
import '../styles/Footer.css';
import {Phone, MailOutline, LinkedIn, GitHub} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-container'>
      
      <div className='footer'>
        <div className='logo'>
          <img src={TextLogo} alt="TextLogo" id='textlogo' />
        </div>

        <div className='contact'>
          <h4>Contact Info</h4>
            <div>
              <span> <Phone /></span> <span><a href="tel:+36123456789">+36 12 345 6789</a></span>
            </div>
            <div>
              <span> <MailOutline /></span> <span><a href="mailto:john@sample.sam">john@sample.sam</a></span>
            </div>
        </div>

        <div className='pages'>
          <h4>Pages</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/career">Career</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className='copyright'>
        <span>2022 © All Rights Reserved | László Szilágyi</span> <span><LinkedIn /></span> <span><GitHub /></span>
      </div>
    </div>
  )
}

export default Footer