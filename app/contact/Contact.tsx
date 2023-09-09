  'use client'

  import '../contact/contact.css'
  import React from 'react'

  const Contact = () => {

    function emailpage(){
      const link = 'https://mail.google.com/';
      window.open(link);
    }


    return (
      <main>
        <div className="header">
          <div className="title font-bold">More About CISCD Oppturnity </div>
          <div className="subtitle">Check the helpful resources below about our organization</div>
          <div className="contact-button">
            <button onClick={emailpage}>Contact Us</button>
          </div>
        </div>
        <div className="container mx-auto p-6 ">
        <div className="flex justify-center gap-4">
          <div className="flex-1 bg-transparent p-4 border rounded-lg flex justify-center items-center" style={{ width: '300px', height: '200px' }}>
            <p> Student QA : Under Construction</p>
          </div>
          <div className="flex-1 bg-transparent p-4 border rounded-lg flex justify-center items-center" style={{ width: '300px', height: '200px' }}>
            <p>Company QA : Under Construction</p>
          </div>
          <div className="flex-1 bg-transparent p-4 border rounded-lg flex justify-center items-center" style={{ width: '500px', height: '200px' }}>
            <p>Partner : Under Construction</p>
          </div>
        </div>
      </div>
      </main>
    )
  }

  export default Contact


