'use client'


import React, { useEffect, useState } from 'react';
import '../Hero/hero.css'

const Hero = () => {



  return (
    <div className='hero_outer_container'>

        <div className='hero_left_container'>
            <div className='hero_left_smaller_container'><img src="CISD_logo.jpg" alt="UACISD" /></div>
        </div>

      
        <div className='hero_right_container'>
            <div className='hero_right_smaller_container'>
              <div className='hero_right_header'>欢迎来到 UACISD</div>
              <div className='hero_right_paragraph'>
                阿尔伯塔大学<br />
                中国留学生发展协会<br />
              </div>
              <div className='hero_right_name'>
                U OF ALBERTA<br />
                CHINESE INTERNATIONAL <br />
                STUDENTS DEVELOPMENT SOCIETY 
              </div>
              {/* <div className='hero_right_button'>加入我们</div> */}
            </div>

        </div>
        

    </div>
  )
}
export default Hero