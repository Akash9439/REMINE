import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';
// import { Link } from "react-scroll";
function Navbar() {
  
  return (
    <Link to='/'>
      <nav className="navbar">
        <div className="logo">
          <a href="/">REMINE</a>
        </div>
        <ul className="nav-links">
          <li><Link to='/'>Home</Link></li>
          {/* <li><Link to='/aboutus'>About Us</Link></li> */}
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/testimonials'>Testimonials</Link></li>
          <li><Link to='/faq'>FAQs</Link></li>
          <li><Link to='/footer'>Contact Us</Link></li>
        </ul>
      </nav>
    </Link>
  )
}

export default Navbar