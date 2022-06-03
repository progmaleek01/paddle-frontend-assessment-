import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import './commingsoon.css'
import {IoLogoFacebook} from 'react-icons/io'
import {AiFillYoutube} from 'react-icons/ai'
import {IoLogoLinkedin} from 'react-icons/io'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'

function CommingSoon() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [days, setDays] = useState(0)

  useEffect( () =>{

    var countDownDate = new Date("june 20, 2022 15:37:25").getTime();

    setInterval(() => {
      //Current Date
      var now = new Date().getTime();
      
      //Date Intervals
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000)) 
    }, 1000);

  })
  return (
    <>
    <Header/>
    <div className='container-soon'>
      
      <div className="bubble-pupple"></div>
      <div className="bubble-blue"></div>
      <div className="bubble-orange"></div>

      <div className="middle">
        <div className="big-text">
          <h1>Something awesome is coming soon</h1>
          <h4>Your all-in-one affiliate marketing tracking software track, automate and optimize your campaigns.</h4>
        </div>
        <div className="box-container">
          <div className="box">
            <p>{days}</p>
            <span>Days</span> 
          </div>

          <div className="box">
            <p>{hours}</p>
            <span>Hours</span> 
          </div>

          <div className="box">
            <p>{minutes}</p>
            <span>Minutes</span> 
          </div>

          <div className="box">
            <p>{seconds}</p>
            <span>Seconds</span> 
          </div>
        </div>

        <div className="input">
          <form action="">
            <div className="names">
              <input className='name' type="text" placeholder='First Name' />
            <input className='name' type="text" placeholder='Last Name' />
            </div>
            <input className='email' type="email" placeholder='Enter your email address' />
            <button className='btn'>Join our waiting list</button>
          </form>
        </div>
      </div>

       <div className="footer">
         <div className="icons">
           <div className="icon"><IoLogoFacebook size='20px'  color='white'/></div>
           <div className="icon"><AiFillYoutube size='20px'  color='white'/></div>
           <div className="icon"><IoLogoLinkedin size='20px'  color='white'/></div>
           <div className="icon"><AiFillInstagram size='20px' color='white'/></div>
           <div className="icon"><AiFillTwitterSquare size='20px'  color='white'/></div>
        </div>

        <div className="terms-con">
          <p>Terms of services</p>
          <p>Privacy policy</p>
        </div>

        <div className="copy"><p>Copyright 2021 @ Peddle Technologies. All Rights Reserved.</p></div>
        
      </div> 

    </div>
    </>
  )
}

export default CommingSoon