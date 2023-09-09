import React from 'react';
import '../Event/event.css';

const Event = () => {
  return (
    <div className='event_outer_container'>
      <div className='event_inner_container'>
        <div className='event_content'>
          <img src='/UofA.png' alt='Event Image' className='event_image' />
          <div className='event_text'>
            <h1>精彩预告-活动</h1>
            <p>我们的每一次活动都是呈现最好的我们,我们的活动也带着我们心意呈现给学生</p>
            <button>报名</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;

