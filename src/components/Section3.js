import React from 'react'
import './Sections.css'
import Section3Bg from '../assets/ld3.webp'

const Section3 = () => {
  return (
    <section>
    <div className='bgImage' style={{ backgroundImage: `url(${Section3Bg})` }}></div>
    <div className="container">
        <p>STARSHIP UPDATE</p>
        <button>Learn more</button>
    </div>
    </section>
  )
}

export default Section3