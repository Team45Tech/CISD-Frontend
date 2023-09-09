import '../aboutus/about.css'


import React from 'react'

const About = () => {
  return (
    <main>
      <section className="about-us">
        <div className="about">
            <img src="intern.jpg" alt="" />
          <div className="text">
            <h2>About Us</h2>
            <h5>Peer Meeting Opportunity & <span>Connection</span></h5>
              <p>The club is design to overcome many chanllenges for incoming student and provide them with tools that need to be successful. Come to the club and join us</p>
            <div className="data">
            <a href="/" className="hire">Home</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
