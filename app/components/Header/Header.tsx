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
    const targetPostion = 735;
    window.scrollTo({
      top : targetPostion,
      behavior: 'smooth'
    });
  };

  const scrollAbout = () =>{
    const targetPostion3 = 1560
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

  return (

    <header className="Header_CISD">
      
      <div className='CISD_LOGO'>
        <a href='/'>
          <img src="/CISD_logo_sq.png" alt="CISD" className='CISD_LOGO_img' />
        </a>
        <a href='/'>
          <img src="/CISD_logo_word.png" alt="CISD" className='CISD_LOGO_word' />
        </a>
        <a href='/'>
          <img src="/CISD_name.png" alt="CISD" className='CISD_name' />
        </a>
      </div>  
      
      
        
      <nav className="Navigation_item">
        
        <ul>
          <li><a onClick={scrollToTop}>主页 </a></li>
          <li><a onClick={scrollStudent}>吃喝玩乐（暂定）</a></li>
          <li><a onClick={scrollAbout}>关于我们</a></li>
          {/* <li><a onClick={scrollToBottom}>活动预告</a></li> */}
          <li><a onClick={scrollToBottom}>联系我们</a></li>

        </ul>
      </nav>
    
    </header>



  )
}

