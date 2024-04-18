import React from 'react'
import { Link } from 'react-router-dom' 
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className="container">
            <Link to="home" className="header_link-item">Logo</Link>
            <div className="header_link">
                <Link to="about" className="header_link-item">About</Link>
                <Link to="men" className="header_link-item">Men</Link>
                <Link to="women" className="header_link-item">Women</Link>
            </div>
        </div>
    </div>
  )
}

export default Header