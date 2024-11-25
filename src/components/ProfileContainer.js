import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const ProfileContainer = ({ user, onLogout }) => (
  <div className="profile-container">
    <div className="profile-bar">
      <div className="profile-info">
        <img
          src={user.avatar || profile}
          alt="User Avatar"
          className="user-avatar"
        />
        <span className="username">{user.username}</span>
      </div>
      {/* Uncomment and style these links if needed */}
      {/* <nav className="profile-nav">
        <Link to="/gym">Gym</Link>
        <Link to="/spa">Spa</Link>
        <Link to="/barber-shop">Barber Shop</Link>
      </nav> */}
      <button className="profile-button" onClick={onLogout}>
        Logout
      </button>
    </div>
  </div>
)

export default ProfileContainer
