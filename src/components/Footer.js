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
          <img src={TextLogo} alt="TextLogo" title='TextLogo' id='textlogo' />
        </div>

        <div className='contact'>
          <h4>Contact Info</h4>
          <div className='cont'>
            <div> <Phone /></div> <div><a href="tel:+36123456789">+36 12 345 6789</a></div>
          </div>
          <div className='cont'>
            <div> <MailOutline /></div> <div><a href="mailto:john@sample.sam">john@sample.sam</a></div>
          </div>
        </div>

        <div className='pages'>
          <h4>Pages</h4>
          <div className='pagelink'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/career">Career</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <div className='copyright'>
        <div className='copy-content'>2022 © All Rights Reserved | László Szilágyi</div> <div className='copy-content'><LinkedIn /></div> <div className='copy-content'><GitHub /></div>
      </div>
    </div>
  )
}

export default Footer