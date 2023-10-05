'use client'

import React from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';
import '../Header/header.css'
import { scrollToBottom, scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';

export default function Header() {

  const scrollHome = () =>{
    window.scrollTo({
      top : 0,
      behavior: 'smooth'
    });
  };

  const scrollStudent = () =>{
    const targetPostion = 415;
    window.scrollTo({
      top : targetPostion,
      behavior: 'smooth'
    });
  };

  const scrollAbout = () =>{
    const targetPostion3 = 1100
    window.scroll({
      top:targetPostion3,
      behavior:'smooth'
    })
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
  }


  const scrollsponsor= () =>{
    const targetPostion3 = 1800
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
      <div className='CISD_LOGO'>
        <img src="/CISD_logo_word.png" alt="CISD" className='CISD_LOGO_word' /></div>
      <div className='CISD_LOGO'>
        <img src="/CISD_name.png" alt="CISD" className='CISD_name' /></div>
      
        
      <nav className="Navigation_item">
        
        <ul>
          <li><a onClick={scrollHome}>主页 </a></li>
          <li><a onClick={scrollStudent}>吃喝玩乐</a></li>
          <li><a onClick={scrollAbout}>关于我们</a></li>
          <li><a onClick={scrollsponsor}>赞助商</a></li>

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

