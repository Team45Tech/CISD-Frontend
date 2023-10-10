'use client'


import React, { useEffect, useState } from 'react';
import './hero.css'

type Slide = {
  src: string;
  alt: string;
};

const Hero: React.FC = () => {  
  // State to track the current index of the displayed image
  const [currentIndex, setCurrentIndex] = useState(0);

  // 自动轮播的时间间隔（毫秒）
  const autoPlayInterval = 12000;

  // Array of slides with image source and alt text
  const slides = [
    { src: 'img_hero.png', alt: 'Hero image' },
    { src: 'Event1.jpg', alt: 'Image 1' },
    { src: 'img2.jpg', alt: 'Image 2' },
    { src: 'img1.jpg', alt: 'Image 3' },
  ];

  

  const updateIndex = (newIndex: number) => {
    setCurrentIndex(newIndex);
  };
  
  // Effect to automatically move to the next slide every 3s
  useEffect(() => {
    console.log("Current Index:", currentIndex);
    const autoPlayTimer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      console.log("Next Index:", nextIndex);
      updateIndex(nextIndex);
    }, autoPlayInterval);
  
    return () => clearInterval(autoPlayTimer);
  }, [currentIndex, slides.length]);
  

  const goToPrevSlide = () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateIndex(prevIndex);
  };
  
  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    updateIndex(nextIndex);
  };
  

  const goToSlide = (index: number) => {
    updateIndex(index);
  };

  return (
    <div className='hero_outer_container'>

      <div className='banner_container'>
        <div className='imgbox'>
          {slides.map((slide, index) => (
            <img
              key={slide.alt}
              className={`img ${index === currentIndex ? 'cr' : ''}`}
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
          onClick={goToPrevSlide}
        />

        {/* 右箭头按钮 */}
        <img
          className="change next"
          src="icon_next.svg"
          alt="Next"
          onClick={goToNextSlide}
        />

        <div className="cirbox">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`cir ${index === currentIndex ? 'cr' : ''}`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Hero