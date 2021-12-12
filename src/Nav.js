import React, { useState } from 'react'
import './nav.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Footer from './Footer'
import arrow from './img/arrow.png'
const Nav = () => {
  const [click, setClick] = useState(false)
  return (
    <>
      <div className='mynav'>
        <span>
          <Link to='/' className=' active' aria-current='page'>
            AUDIO
          </Link>
        </span>
        {/* <img src={arrow} /> */}
        <p onClick={() => setClick(!click)}>arrow</p>
        <span>
          <Link to='/video' className='right'>
            VIDEO
          </Link>
        </span>
      </div>
      {click && <Footer />}
    </>
  )
}

export default Nav
