import React from 'react'
import './intro.css';
import dp from '../../dp.jpg';
//import logo from '../../logo.png';
import { Button } from 'react-scroll';
import { Link } from 'react-scroll';
const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
        <span className="Hello">Hello , </span>
        <span className="introText"> I am <span className='introName'> Rajkanya  Chaudhary</span><br/>Software Developer</span>
        <p className='introPara'>I am a skilled Software Developer , visually appearing and user friendly website.</p>
        <Link><Button className='btn'>Hire me </Button></Link>
        </div>
        <img src={dp} alt="Profile" className="dp"/>
    </section>
  )
}

export default Intro
