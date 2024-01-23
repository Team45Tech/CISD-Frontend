'use client'


import React from 'react';
import '../Application/student.css'



  const handleClick = () =>{
    window.open('https://www.instagram.com/');
  }


const Student = () => {
  return (
    <div className='application_outer_container'>
      <div className='application_center_container'>
        <div className='application_header'>example</div>
        <div className='application_paragraph'>example</div>
      </div>
      <div className='application_lower_container'>
        <div className='application_left_lower_container'>
          <img src='/UofA.png' alt='UofA' onClick={handleClick}  />
          <button className='left_header' onClick={handleClick}>example</button>
          <div className='left_paragraph' >example,example</div>
          {/* <button className='left_button'>入团申请提交</button> */}
        </div>
        <div className='application_right_lower_container'>
          <img src='/UofA.png' alt='UofA' onClick={handleClick} />
          <button className='right_header' onClick={handleClick}>example</button>
          <div className='right_paragraph'>example</div>
          {/* <button className='right_button'>活动预告</button> */}
        </div>
    
      </div>
    </div>
  )
}

export default Student
