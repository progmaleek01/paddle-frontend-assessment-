import React from 'react'
import './header.css'
import LOGO from '../../assets/new-logo.png'

function Header() {
  return (
    <div className='header'>
        <div className="logo">
            <img src={LOGO} alt="" />
            {/* <h5>METRICS</h5> */}
        </div>

        <div className="links">
            <ul>
                <li> <a href="#">ABOUT US</a></li>
                <li> <a href="#">BLOG</a></li>
            </ul>
            
            <div className="contact"><a href="#">CONTACT US</a></div>
        </div>
    </div>
  )
}

export default Header