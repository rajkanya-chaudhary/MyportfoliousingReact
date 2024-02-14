import React from 'react'
import './navbar.css'
import logo from '../../logo.png';
import { Link } from 'react-scroll';
import { Button } from 'react-scroll';
//import log from '../../log.png';
const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className='logo'/>
        <div className="desktopMenu">
         <Link className="desktopMenuListItem">Home</Link>
         <Link className="desktopMenuListItem">About</Link>
         <Link className="desktopMenuListItem">Client</Link>
         <Link className="desktopMenuListItem">Portfolio</Link>
         <Link><Button className='btn'>Contact me </Button></Link>
        </div>
        
    </nav>
  )
}

export default Navbar