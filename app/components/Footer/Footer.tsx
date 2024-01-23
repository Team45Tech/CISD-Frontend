'use client'

import React from 'react';
import Link from 'next/link';
import '../Footer/footers.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWeixin, faWeibo} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (

<footer className="footer">
      <div className="container">
        <div className="row">
          <div className='footer-col'>
            <Link href="/">
              <img className='cs-img' src="" alt="CISD-logo" />
            </Link>
          </div>

          <div className="footer-col">
            <ul>
              <h4>contact</h4>
              <li><a href="#">Email:</a></li>
              <li><a href="#">WeChat: </a></li>              
            </ul>
          </div>

          <div className="footer-col">
            <h4> example</h4>
            <div className="social-links">
              <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
              {/* <a href="/"><FontAwesomeIcon icon={faWeixin} /></a> */}
              <a href=""><FontAwesomeIcon icon={faWeibo} /></a>


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



