import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Setting from './Setting'
import Profile from './Profile'
import Footer from './Footer'
const Dashboard = () => {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/setting" element={<Setting />} />
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default Dashboard
