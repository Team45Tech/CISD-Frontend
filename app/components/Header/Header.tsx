'use client'

import React from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';
import '../Header/header.css'

export default function Header() {

  const scrollToPosition = () =>{
    const targetPostion = 500;
    window.scrollTo({
      top : targetPostion,
      behavior: 'smooth'
    });
  };

  const scrollStudent = () => {
    const targetPostion2 = 1200
    window.scroll({
      top:targetPostion2,
      behavior: 'smooth'
    })
  }

  const scrollAbout = () =>{
    const targetPostion3 = 2000
    window.scroll({
      top:targetPostion3,
      behavior:'smooth'
    })
  }


  return (

    <header className="Header_CISD">
      <div className="CSID_LOGO">
        <img src="/School_logo.png" alt="UofA" className='CSID_LOGO_img' />
      </div>
      <div className='CSID_LOGO'><img src="/x.png" alt="CISD" className='x_img' /></div>
      <div className='CSID_LOGO'><img src="/CISD_logo.jpg" alt="CISD" className='CISD_LOGO_img' /></div>
      <nav className="Navigation_item">
        
        <ul>
          <li><a onClick={scrollToPosition}>Contact Us</a></li>
          <li><a onClick={scrollStudent}>Student</a></li>
          <li><a onClick={scrollAbout}>About Us</a></li>
        </ul>
      </nav>
    <div className="actions">
      <div className="dark-mode">
        Dark Mode
      </div>
      <div className="join-us">
        Join Us
      </div>
    </div>
    </header>



  )
}

