import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home/Home'
import Setting from './Setting/Setting'
import Profile from './Profile/Profile'
import Footer from './Footer'
import Items from './Home/Items'
import Cart from './Home/Cart'
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
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/items" element={<Items />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default Dashboard
