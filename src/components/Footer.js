import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='copy'>Spacex &copy; 2022</div>
        <div className='links'>
             <ul>
                <li><Link to='#'>Twitter</Link></li>
                <li><Link to='#'>Youtube</Link></li>
                <li><Link to='#'>Instagram</Link></li>
                <li><Link to='#'>Flickr</Link></li>
                <li><Link to='#'>Linkedin</Link></li>
                <li><Link to='#'>Privacy Policy</Link></li>
                <li><Link to='#'>Suppliers</Link></li>
             </ul>
        </div>
    </footer>
  )
}

export default Footer