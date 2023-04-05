import React from 'react'
import './Sections.css'
import Section4Bg from '../assets/ld4.webp'

const Section4 = () => {
  return (
    <section>
    <div className='bgImage' style={{ backgroundImage: `url(${Section4Bg})` }}></div>
    <div className="container">
        <p>STARSHIP SELECTED BY NASA TO SUPPORT SUSTAINED LUNAR EXPLORATION</p>
        <button>Learn more</button>
    </div>
    </section>
  )
}

export default Section4