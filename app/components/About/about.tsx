'use client'

import React, { useState } from 'react';
import '../About/about.css';

const About = () => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);

  return (
    <div className='about_outer_container'>
      <div className='about_header'>中国留学生发展协会在UA</div>
      <div className='about_paragraph'>
        提供给留学生更保障的大学生活和更成功的工作机会并不只是我们的目标-是我们的承诺
      </div>
      <div className='about_gallery'>
        <div
          className='image-container'
          onMouseEnter={() => setHovered1(true)}
          onMouseLeave={() => setHovered1(false)}
        >
          <img src="/img1.jpg" alt="Image 1" className={hovered1 ? 'hidden' : ''} />
          <img src="/UofA.png" alt="Hover Image 1" className={hovered1 ? '' : 'hidden'} />
          <div className='about_text'>剧本杀-艾德明顿冬天唯一的娱乐活动</div>
        </div>

        <div
          className='image-container'
          onMouseEnter={() => setHovered2(true)}
          onMouseLeave={() => setHovered2(false)}
        >
          <img src="/img2.jpg" alt="Image 2" className={hovered2 ? 'hidden' : ''} />
          <img src="/UofA.png" alt="Hover Image 2" className={hovered2 ? '' : 'hidden'} />
          <div className='about_text'>新生帮忙-我们是你最坚强的后盾</div>
        </div>

        <div
          className='image-container'
          onMouseEnter={() => setHovered3(true)}
          onMouseLeave={() => setHovered3(false)}
        >
          <img src="/img3.jpg" alt="Image 3" className={hovered3 ? 'hidden' : ''} />
          <img src="/UofA.png" alt="Hover Image 3" className={hovered3 ? '' : 'hidden'} />
          <div className='about_text'>课程推荐-我们将带领你们走向GPA4.0</div>
        </div>

        <div
          className='image-container'
          onMouseEnter={() => setHovered4(true)}
          onMouseLeave={() => setHovered4(false)}
        >
          <img src="/img4.jpg" alt="Image 4" className={hovered4 ? 'hidden' : ''} />
          <img src="/UofA.png" alt="Hover Image 4" className={hovered4 ? '' : 'hidden'} />
          <div className='about_text'>社团实习-简历上的空白是最后遗迹</div>
        </div>
      </div>
    </div>
  );
};

export default About;
