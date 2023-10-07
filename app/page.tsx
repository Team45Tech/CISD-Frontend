'use client'

import React from 'react'



// COMPONENET PAGE IMPORTING 
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


import Student from './components/Application/Student'
import Hero from './components/Hero/Hero'
import Event from './components/Event/Event'
import About from './components/About/about'




const Page = () => {



  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Student/>
      <Event/>
      <Footer/>
    </div>
     
    

    
  )
}

export default Page