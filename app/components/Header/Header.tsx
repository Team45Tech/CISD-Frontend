'use client'

import React from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';
import '../Header/header.css'

export default function Header() {

  const scrollHome = () =>{
    const targetPostion = 0;
    window.scrollTo({
      top : targetPostion,
      behavior: 'smooth'
    });
  };

  const scrollToPosition = () =>{
    const targetPostion = 900;
    window.scrollTo({
      top : targetPostion,
      behavior: 'smooth'
    });
  };

  const scrollStudent = () => {
    const targetPostion2 = 1650
    window.scroll({
      top:targetPostion2,
      behavior: 'smooth'
    })
  }

  const scrollContact = () =>{
    const targetPostion3 = 2500
    window.scroll({
      top:targetPostion3,
      behavior:'smooth'
    })
  }


  return (

    <header className="Header_CISD">
      {/* <div className="CSID_LOGO">
        <img src="/School_logo.png" alt="UofA" className='CSID_LOGO_img' />
      </div>
      <div className='CSID_LOGO'><img src="/x.png" alt="CISD" className='x_img' /></div> */}
      <div className='CSID_LOGO'>
        <img src="/CISD_logo_sq.png" alt="CISD" className='CISD_LOGO_img' /></div>  

      3
        
      <nav className="Navigation_item">
        
        <ul>
          <li><a onClick={scrollHome}>主页 </a></li>
          <li><a onClick={scrollToPosition}>关于我们</a></li>
          <li><a onClick={scrollStudent}>加入我们</a></li>
          <li><a onClick={scrollContact}>活动预告</a></li>
        </ul>
      </nav>
    {/* <div className="actions">
      <div className="dark-mode">
        Dark Mode
      </div>
      <div className="join-us">
        Join Us
      </div>
    </div> */}
    </header>



  )
}

