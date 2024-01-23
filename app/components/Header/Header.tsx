// Header.tsx

import React, { useRef } from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';
import '../Header/header.css'
import { scrollToBottom, scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';

export default function Header() {

  const scrollToTop = () =>{
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
      
      <div className='CISD_LOGO'>
        <a href='/'>
          <img src="/" alt="CISD" className='CISD_LOGO_img' />
        </a>
        <a href='/'>
          <img src="/" alt="CISD" className='CISD_LOGO_word' />
        </a>
        <a href='/'>
          <img src="/" alt="CISD" className='CISD_name' />
        </a>
      </div>  
      
      
        
      <nav className="Navigation_item">
        
        <ul>
          <li><a onClick={scrollToTop}>example </a></li>
          <li><a onClick={scrollStudent}>example</a></li>
          <li><a onClick={scrollAbout}>example</a></li>
          {/* <li><a onClick={scrollToBottom}>活动预告</a></li> */}
          <li><a onClick={scrollToBottom}>example</a></li>

        </ul>
      </nav>
    
    </header>



  )
}

