import React from 'react'
import './Sections.css'
import Section1Bg from '../assets/ld1.jpg'

const Section1 = () => {
  return (
    <section>
    <div className='bgImage' style={{ backgroundImage: `url(${Section1Bg})` }}></div>
    <div className="container">
      <div id="top"></div>
        <h2>Upcoming Launch</h2>
        <p>SPACE DEVELOPMENT AGENCY’S TRANCHE 0 MISSION</p>
        <button>Watch</button>
    </div>
    </section>
  )
}

export default Section1