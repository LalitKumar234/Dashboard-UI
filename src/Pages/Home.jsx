import React, { useState } from 'react'
import './Page.css'
import SideNav from './Components/SideNav'
import Dashboard from './Components/Dashboard'

const Home = () => {
  const [showSideNav, setShowSideNav] = useState(false)
  return (
    <div className='home-container'>
      <SideNav showSideNav={showSideNav} setShowSideNav={setShowSideNav}/>
      <Dashboard setShowSideNav={setShowSideNav}/>
    </div>
  )
}

export default Home