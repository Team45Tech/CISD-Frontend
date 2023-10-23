'use client'


import React from 'react';
import './about.css'
import { useNavigate } from 'react-router-dom';
import Link from 'next/link';

const About = () => {


  return (
    <div className='application_outer_container'>
      <div className='application_header_container'>
        <div className='application_header'>梦想-投入-蜕变</div>
        <div className='application_paragraph'>好奇,决心,目标驱使着我们挑战自我</div>
      </div>

      <div className='application_lower_container'>
        <div className='application_left_lower_container'>
          <Link href='/construction'>
            <img src='/c.jpg' alt='Past Events'  />
          </Link>
          <p className='section_header'>往期活动</p>
          <div className='section_paragraph'>我们有着丰富的活动经验</div>
          {/* <button className='left_button'>入团申请提交</button> */}
        </div>

        <div className='application_center_lower_container'>
          <Link href='/construction'>
            <img src='/s.jpg' alt='Members'  />
          </Link>
          <div className='section_header'>部门介绍</div>
          <div className='section_paragraph'>我们不需要证明自己,一心一意的贡献是我们行动</div>
          {/* <button className='left_button'>button</button> */}
        </div>

        <div className='application_right_lower_container'>
          <Link href='/construction'>
            <img src='/d.jpg' alt='Application' />
          </Link>
          <div className='section_header'>加入我们</div>
          <div className='section_paragraph'>志愿者机会</div>
          {/* <button className='right_button'>活动预告</button> */}
        </div>
      </div>
    </div>
  )
}

export default About
