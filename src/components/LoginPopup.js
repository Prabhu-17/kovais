import React, { useState } from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const LoginPopup = ({ isOpen, onClose, onLogin }) => {
  const [isSignIn, setIsSignIn] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleToggle = () => {
    setIsSignIn(!isSignIn)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin({ username, avatar: '' })
    onClose()
  }

  return isOpen ? (
    <div className="login-popup">
      <div className="login-card">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {!isSignIn && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}
          <button type="submit">{isSignIn ? 'Sign In' : 'Sign Up'}</button>
        </form>
        <button onClick={handleToggle} className="toggle-button mt-4">
          {isSignIn
            ? 'Need an account? Sign Up'
            : 'Already have an account? Sign In'}
        </button>
      </div>
    </div>
  ) : null
}

export default LoginPopup
