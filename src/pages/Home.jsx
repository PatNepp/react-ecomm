import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <Announcement 
            announcement="Super Deal! Free Shipping on Orders Over $50" 
        />
        <Navbar />
    </div>
  )
}

export default Home