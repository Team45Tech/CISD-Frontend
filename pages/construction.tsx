'use client'


// CHANGE THE FONT FAMILY AT THE END //

import Image from 'next/image'

export default function Home() {


  function linkpage(){
    const link = 'https://www.google.com/search?gs_ssp=eJzj4tLP1TcoNzC2MDBVYDRgdGDw4sjJzMtOTcnMAwBRaga5&q=linkedin&oq=link&aqs=chrome.1.69i60j46i39i199i465i650j69i57j0i131i433i512j0i433i512j69i60l3.4130j0j7&sourceid=chrome&ie=UTF-8';
    window.open(link);
  };

  function emailpage(){
    const link = 'https://mail.google.com/';
    window.open(link);
  }


  return (
    <main>
      <div className='bg-construction-bg overflow-auto bg-local h-screen'>
        <div className='backdrop-blur-xl h-screen w-screen'>
          <div className='flex justify-end pt-5'>
            <a href="/" className='text-right text-gray-300 no-underline pr-10 '>About Us</a>
          </div>

          <div className='pt-32 text-center tracking-wide'>
            <span className='block font-semibold text-7xl'>
              UNDER
            </span>
            <span className='block font-semibold text-7xl pt-4'>
              CONSTRUCTION
            </span>
            
            <div className='text-center pt-6 space-x-5'>
              <p className='text-lg text-gray-100'>Site almost ready</p>
            </div>
            
            <div className='items-center pt-20 text-center'>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>Remind me</button>
            </div>
            
            <div className='flex items-center justify-center pt-8 space-x-6'>
              <img src="link.png" alt="link" onClick={linkpage} />
              <img src="email.png" alt="email" onClick={emailpage} />
            </div>
          </div>

          <div className='text-center pt-24'>
            <p className='text-sm'>
              &copy; 2023 By Team56Tech. Contact us at team56techca@gmail.com
            </p>
          </div>
        </div> {/*SMALLER CONTAINER FOR BLUR*/}
      </div> {/*Biggest Container and Background div*/}
    </main>
  )
}




// 'use client'

// import React from 'react'



// COMPONENET PAGE IMPORTING 
// import Header from '../components/Header/Header'
// import Footer from '../components/Footer/Footer'


// import Student from '../components/Application/Student'
// import Hero from '../components/Hero/Hero'
// import Event from '../components/Event/Event'
// import About from '../components/About/about'




// const Page = () => {



//   return (
//     <div>
//       <Header/>
//       <Hero/>
//       <About/>
//       <Student/>
//       <Event/>
//       <Footer/>
//     </div>
     
    

    
//   )
// }

// export default Page