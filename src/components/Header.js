import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Logo from '../assets/spacex.svg'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'




const Header = () => {

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <header>

      <div className='logo'><img src={Logo} alt="SpaceX Logo" /></div>


      <nav>
        <ul>
          <li><Link to='/falcon9'>Falcon-9</Link></li>
          <li><Link to='falcon-heavy'>Falcon Heavy</Link></li>
          <li><Link to='dragon'>Dragon</Link></li>
          <li><Link to='starship'>Starship</Link></li>
          <li><Link to='human-spaceflight'>Human Spaceflight</Link></li>
          <li><Link to='rideshare'>Ridershare</Link></li>
          <li><Link to='starshield'>Starshield</Link></li>
          <li><Link to='starlink'>Starlink</Link></li>
          <li id='shop-link'><Link to='shop'>Shop</Link></li>

        </ul>

        <div className='hamburger' onClick={handleClick}>

          {
            click ? <FaTimes size={20} style={{ color: "#ddd" }} />
              : <FaBars size={20} style={{ color: "#ddd" }} />
          }
        </div>

        <div className={click ? 'hamburger-menu hamburger-active' : 'hamburger-menu'}>
          <ul>
            <li><Link to='mission'>Mission</Link></li>
            <li><Link to='launches'>Lanuches</Link></li>
            <li><Link to='careers'>Careers</Link></li>
            <li><Link to='updates'>Updates</Link></li>
            <li id='mobile-nav'><Link to='/falcon9'>Falcon-9</Link></li>
            <li id='mobile-nav'><Link to='falcon-heavy'>Falcon Heavy</Link></li>
            <li id='mobile-nav'><Link to='dragon'>Dragon</Link></li>
            <li id='mobile-nav'><Link to='starship'>Starship</Link></li>
            <li id='mobile-nav'><Link to='human-spaceflight'>Human Spaceflight</Link></li>
            <li id='mobile-nav'><Link to='rideshare'>Ridershare</Link></li>
            <li id='mobile-nav'><Link to='starshield'>Starshield</Link></li>
            <li id='mobile-nav'><Link to='starlink'>Starlink</Link></li>
            <li id='shop-link'><Link to='shop'>Shop</Link></li>


          </ul>

        </div>



      </nav>

    </header>
  )
}

export default Header