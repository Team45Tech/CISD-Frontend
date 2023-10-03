import React from 'react';
import '../Event/event.css';

const Event = () => {
  return (
    <div className='event_outer_container'>
      <div className='event_inner_container'>
        <div className='event_content'>
          <img src='/UofA.png' alt='Event Image' className='event_image' />
          <div className='event_text'>
            <h1>广告位</h1>
            <p>我们的每一次活动都是呈现最好的我们,我们的活动也带着我们心意呈现给学生<br />
            更多细节请添加小助手微信：xzswx</p>
            <button>更多</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;

