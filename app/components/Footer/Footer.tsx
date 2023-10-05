'use client'

import React from 'react';
import '../Footer/footers.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWeixin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (

<footer className="footer">
      <div className="container">
        <div className="row">
          <div className='footer-col'>
            <img className='cs-img' src="CISD_logo_sq.png" alt="CISD-logo" />
          </div>

          <div className="footer-col">
            <ul>
              <h4>联系我们</h4>
              <li><a href="#">Email: maxhaotz@gmail.com</a></li>
              <li><a href="#">Weixin公众号:Max想吃韩国烤肉了</a></li>              
            </ul>
          </div>

          <div className="footer-col">
            <h4> 关注我们</h4>
            <div className="social-links">
              <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faWeixin} /></a>

            </div>
          </div>

          <div className='footer-col'>
            <p className='copyright'>&copy; 2023 By Team56Tech.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}



