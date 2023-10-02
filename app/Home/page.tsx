'use client'

import React from 'react'



// COMPONENET PAGE IMPORTING 
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Contact from '../contact/Contact'

import Student from '../components/Home/Application/Student'
import Hero from '../components/Home/Hero/Hero'
import Event from '../components/Home/Event/Event'
import About from '../components/Home/About/about'




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