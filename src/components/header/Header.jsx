import React from 'react'
import './header.css'

function Header() {
  return (
    <header className="header">
        <div className='header-1'>
        <h1 className='header-heading'>griffins-global</h1>
        </div>
        <div className='header-2'>
            <ul>
                <li className="li">home</li>
                <li className="li">about us</li>
                <li className="li">our team</li>
                <li className="li">products</li>
                <li className="li">contact-us</li>
                <li className="li">create</li>
            </ul>
            
        </div>
    </header>
  )
}

export default Header