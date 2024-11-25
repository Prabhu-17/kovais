import React from 'react'
import { Link } from 'react-router-dom'
import ProfileContainer from './ProfileContainer'
import logo from '../img/logo.jpg'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = ({ onLoginClick, user, onLogout }) => (
  <header className="header">
    <div className="header-left">
      <img src={logo} alt="Logo" className="logo" />
      <span className="company-name">THE BOYZ</span>
    </div>
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="#">About</Link>
      <Link to="#">Booking</Link>
      {user ? (
        <ProfileContainer user={user} onLogout={onLogout} />
      ) : (
        <button className="login-button" onClick={onLoginClick}>
          Get Started
        </button>
      )}
    </nav>
  </header>
)

export default Header
