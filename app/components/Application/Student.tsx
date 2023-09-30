'use client'


import React, { useEffect, useState } from 'react';
import '../Application/student.css'

type Slide = {
  src: string;
  alt: string;
};

const Student = () => {
  
  // State to track the current index of the displayed image
  const [left_currentIndex, setLeftCurrent] = useState(0);
  const [right_currentIndex, setMidCurrent] = useState(0);
  

  // Array of slides with image source and alt text
  const left_slides = [
    { src: 'Event1.jpg', alt: 'img1' },
    { src: 'event2.jpg', alt: 'img2' },
    { src: 'event3.jpg', alt: 'img3' },
  ];

  const right_slides = [ /*mid picture*/
    { src: 'team1.jpg', alt: 'department_img1' },
    { src: 'team2.jpg', alt: 'department_img2' },
    { src: 'team3.jpg', alt: 'department_img3' },
    { src: 'team4.jpg', alt: 'department_img4' },
    { src: 'team5.jpg', alt: 'department_img5' },
    { src: 'team6.jpg', alt: 'department_img6' },
    { src: 'team7.jpg', alt: 'department_img7' },
    
  ];
  
  

  

  const updateIndex_left = (newIndex: number) => {
    setLeftCurrent(newIndex);
  };

  const updateIndex_right = (newIndex: number) => {
    setMidCurrent(newIndex);
  };
  
  // Effect to automatically move to the next slide every 3s
  
  

  const left_goToPrevSlide = () => {
    const prevIndex = (left_currentIndex - 1 + left_slides.length) % left_slides.length;
    updateIndex_left(prevIndex);
  };
  
  const left_goToNextSlide = () => {
    const nextIndex = (left_currentIndex + 1) % left_slides.length;
    updateIndex_left(nextIndex);
  };


  const right_goToPrevSlide = () => {
    const prevIndex = (right_currentIndex - 1 + right_slides.length) % right_slides.length;
    updateIndex_right(prevIndex);
  };
  
  const right_goToNextSlide = () => {
    const nextIndex = (right_currentIndex + 1) % right_slides.length;
    updateIndex_right(nextIndex);
  };

  const goToSlide1 = (index: number) => {
    updateIndex_left(index);
  };

  const goToSlide2 = (index: number) => {
    updateIndex_right(index);
  };


  return (
    <div className='application_outer_container'>

      <div className='application_header_container'>
        <div className='application_header'>梦想-投入-蜕变</div>
        <div className='application_paragraph'>好奇,决心,目标驱使着我们挑战自我</div>
      </div>

      <div className='application_lower_container'>
        <div className='application_left_lower_container'>
        <div className='banner_container'>
          {/*这个是照着hero抄的，调用的css好像也是hero里的，我不会搞css，就只能这么扔着了 o(╥﹏╥)o */}
        <div className='imgbox1'>
          {left_slides.map((slide, index) => (
            <img
              key={slide.alt}
              className={`img ${index === left_currentIndex ? 'cr' : ''}`}
              src={`/${slide.src}`}
              alt={slide.alt}
              onLoad={() => console.log(`Image ${index} has been loaded`)}
            />
          ))}
        </div>


        {/* 左箭头按钮 */}
        <img
          className="change pre"
          src="icon_pre.svg"
          alt="Previous"
          onClick={left_goToPrevSlide}
        />

        {/* 右箭头按钮 */}
        <img
          className="change next"
          src="icon_next.svg"
          alt="Next"
          onClick={left_goToNextSlide}
        />

        <div className="cirbox">
          {left_slides.map((slide, index) => (
            <div
              key={index}
              className={`cir ${index === left_currentIndex ? 'cr' : ''}`}
              onClick={() => goToSlide1(index)}
            ></div>
          ))}
        </div>
      </div>
          <p className='section_header'>往期活动</p>
          <div className='section_paragraph'>我们有着丰富的活动经验</div>
          {/* <button className='left_button'>入团申请提交</button> */}
        </div>


        

        <div className='application_center_lower_container'>
          <img src='QRcode.png' alt='Application' />
          {/*个人想法改成小助手*/}
          <div className='section_header'>加入我们</div>
          <div className='section_paragraph'>我们不需要证明自己,一心一意的贡献是我们行动</div>
          {/* <button className='right_button'>活动预告</button> */}
        </div>
      
        <div className='application_right_lower_container'>
          <div className='right_banner_container'>
        <div className='imgbox1'>
          {right_slides.map((slide, index) => (
            <img
              key={slide.alt}
              className={`img ${index === right_currentIndex ? 'cr' : ''}`}
              src={`/${slide.src}`}
              alt={slide.alt}
              onLoad={() => console.log(`Image ${index} has been loaded`)}
            />
          ))}
        </div>


        {/* 左箭头按钮 */}
        <img
          className="change pre"
          src="icon_pre.svg"
          alt="Previous"
          onClick={right_goToPrevSlide}
        />
        

        {/* 右箭头按钮 */}
        <img
          className="change next"
          src="icon_next.svg"
          alt="Next"
          onClick={right_goToNextSlide}
        />

        <div className="cirbox">
          {right_slides.map((slide, index) => (
            <div
              key={index}
              className={`cir ${index === right_currentIndex ? 'cr' : ''}`}
              onClick={() => goToSlide2(index)}
            ></div>
          ))}
        </div>
      </div>
          <div className='section_header'>部门介绍</div>
          <div className='section_paragraph'>我们不需要证明自己,一心一意的贡献是我们行动</div>
          {/* <button className='left_button'>button</button> */}
        </div>
      </div>
    </div>
  )
}

export default Student
