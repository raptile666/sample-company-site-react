import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../styles/NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='nav-left'>
            <img src={Logo} alt="logo" id='logo'/>
        </div>

        <div className="nav-right">
            <Link to="/" className='borderLink'>Home</Link>
            <Link to="/about" className='borderLink'>About</Link>
            <Link to="/services" className='borderLink'>Services</Link>
            <Link to="/projects" className='borderLink'>Projects</Link>
            <Link to="/career" className='borderLink'>Career</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default NavBar