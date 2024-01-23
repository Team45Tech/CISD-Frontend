'use client'


import React from 'react';
import './about.css'
import { useNavigate } from 'react-router-dom';
import Link from 'next/link';

const About = () => {


  return (
    <div className='application_outer_container'>
      <div className='application_header_container'>
        <div className='application_header'>example</div>
        <div className='application_paragraph'>example</div>
      </div>

      <div className='application_lower_container'>
        <div className='application_left_lower_container'>
          <Link href='/construction'>
            <img src='/c.jpg' alt='Past Events'  />
          </Link>
          <p className='section_header'>example</p>
          <div className='section_paragraph'>example</div>
          {/* <button className='left_button'>入团申请提交</button> */}
        </div>

        <div className='application_center_lower_container'>
          <Link href='/construction'>
            <img src='/s.jpg' alt='Members'  />
          </Link>
          <div className='section_header'>example</div>
          <div className='section_paragraph'>example</div>
          {/* <button className='left_button'>button</button> */}
        </div>

        <div className='application_right_lower_container'>
          <Link href='/construction'>
            <img src='/d.jpg' alt='Application' />
          </Link>
          <div className='section_header'>example</div>
          <div className='section_paragraph'>example</div>
          {/* <button className='right_button'>活动预告</button> */}
        </div>
      </div>
    </div>
  )
}

export default About
