import React from 'react';
import { Link } from 'react-router-dom';

const personalGreeting = (currentUser, logout) => (
  <div className="navbar-button">
    <span className="welcome">Welcome, {currentUser.username}</span>
    <button onClick={logout} 
      className="logout-btn">Log Out</button>
  </div>
);

const sessionLinks = () => (
  <div className="navbar-button">
      <Link className="btn" to="/login">Log In</Link>
      <span className="pipe">|</span>
      <Link className="btn" to="/signup">Sign Up</Link>
  </div>
);


const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
