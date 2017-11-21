import React from 'react';
import { Link } from 'react-router-dom';

const personalGreeting = (currentUser, logout) => (
  <div className="navbar-button">
    <span className="welcome">Welcome to Doable, {currentUser.username}</span>
    <button onClick={logout} className="btn">Log Out</button>
  </div>
);

const sessionLinks = () => (
  <div className="navbar-button">
      <Link className="btn" to="/login">Log In</Link>
      <Link className="btn" to="/signup">Sign Up</Link>
  </div>
);


const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
