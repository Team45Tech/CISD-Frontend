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
              <div className='hero_right_paragraph'>我们希望我们的社团带你一起融入UA,创造无限未来 </div>
              <div className='hero_right_button'>加入我们</div>
            </div>

        </div>


    </div>
  )
}
export default Hero