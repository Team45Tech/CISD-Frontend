'use client'

import React from 'react';
import '../Footer/footer.css'
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='footer'>
       
      <div className='email_container'>
        <Link href="/">
          <img src="/CISD_logo_sq.png" alt="CISD" className='logo_img' />
        </Link>
      </div>
      {/* <div className='footer-links'>
        <a href='contact'>Contact</a>
        <a href='/'>Legal</a>
      </div> */}
      
      <div className='copyright_container'>
        <p>&copy; 2023 By Team56Tech.</p> 
      </div>
    </footer>
  );
}


