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
        <div className='application_header'>梦想-投入-蜕变</div>
        <div className='application_paragraph'>好奇,决心,目标驱使着我们挑战自我</div>
      </div>
      <div className='application_lower_container'>
        <div className='application_left_lower_container'>
          <img src='/UofA.png' alt='UofA' onClick={handleClick}  />
          <button className='left_header' onClick={handleClick}>往期活动</button>
          <div className='left_paragraph' >我们不需要证明自己,一心一意的贡献是我们行动</div>
          {/* <button className='left_button'>入团申请提交</button> */}
        </div>
        <div className='application_right_lower_container'>
          <img src='/UofA.png' alt='UofA' onClick={handleClick} />
          <button className='right_header' onClick={handleClick}>人员名单</button>
          <div className='right_paragraph'>我们有着丰富的活动经验</div>
          {/* <button className='right_button'>活动预告</button> */}
        </div>
    
      </div>
    </div>
  )
}

export default Student
