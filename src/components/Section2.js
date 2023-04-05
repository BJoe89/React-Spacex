import React from 'react'
import './Sections.css'
import Section2Bg from '../assets/ld2.jpg'

const Section2 = () => {
  return (
    <section>
    <div className='bgImage' style={{ backgroundImage: `url(${Section2Bg})` }}></div>
    <div className="container">
        <h2>RECENT LAUNCH</h2>
        <p>STARLINK MISSION</p>
        <button>ReWatch</button>
    </div>
    </section>
  )
}

export default Section2