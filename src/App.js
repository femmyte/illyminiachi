import React from 'react'
import Music from './Music'
import Video from './Video'
import './App.css'
import Nav from './Nav'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <Nav />
      <div className='container app'>
        <Routes>
          <Route path='/video' element={<Video />} />
          <Route path='/' element={<Music />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
