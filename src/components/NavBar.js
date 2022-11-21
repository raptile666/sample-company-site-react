import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { MenuRounded } from '@mui/icons-material';
import '../styles/NavBar.css'

const NavBar = () => {
  
  const [hamburgerStyle, setHamburgerStyle] = useState({display: 'none'});

  const clickIn = () => {
    setHamburgerStyle({display: 'block'});
  }

  const clickOut = () => {
    setHamburgerStyle({display: 'none'});
  }
  
  return (
    <div>

      <div className='navbar-desktop'>
          <div className='nav-left'>
              <img src={Logo} alt="logo" text="logo" id='logo'/>
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


      <div className="navbar-mobile">

        <div className='nav-left'>
            <img src={Logo} alt="logo" id='logo'/>
        </div>

        <div className="nav-right">
          <MenuRounded onClick={clickIn} />
          <div className='hamburger' style={hamburgerStyle} onMouseLeave={clickOut} >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/career">Career</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

      </div>

    </div>
  )
}

export default NavBar