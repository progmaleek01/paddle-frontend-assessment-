import React from 'react'
import './head.css'
import LOGO from '../../../assets/new-logo.png'

function Head() {
  return (
    <div className='head'>
    <div className="logo">
        <img src={LOGO} alt="" />
        {/* <h5>METRICS</h5> */}
    </div>

    <div className="links">
        <ul>
            <li> <a href="#">ABOUT US</a></li>
            <li id='blog-blog'> <a href="#">BLOG</a></li>
        </ul>
        
        <div className="contact-head"><a href="#">CONTACT US</a></div>
    </div>
</div>
  )
}

export default Head