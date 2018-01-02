import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  personalGreeting(currentUser, logout) {
    // const { currentUser, logout } = this.props;
    return (
      <div className="navbar-button">
        <span className="welcome">Welcome, {currentUser.username}</span>
        <button onClick={logout}
          className="logout-btn">Log Out</button>
      </div>
    );
  }

  render() {
    const { login, currentUser, logout } = this.props;
    const demoUser = {username:"Baby_demo", password:"password"};
    if (currentUser) {
      return (
        this.personalGreeting(currentUser, logout)
      );
    }
    else {
      return (
        <div className="navbar-button">
          <Link className="btn" to="/signup">Sign Up</Link>
          <span className="pipe">|</span>
          <Link className="btn" to="/login">Log In</Link>
          <span className="pipe">|</span>
          <Link to="/" onClick={() => login(demoUser)}
            className="btn">Demo Log In
          </Link>
        </div>
      );
    }
  }
}

// const personalGreeting = (currentUser, logout) => (
//
// );
//
// const sessionLinks = ({login}) => {
//   const demoUser = {username:"Baby_demo", password:"password"};
//   return (
//     <div className="navbar-button">
//       <Link className="btn" to="/signup">Sign Up</Link>
//       <span className="pipe">|</span>
//       <Link className="btn" to="/login">Log In</Link>
//       <span className="pipe">|</span>
//       <Link to="/login" onClick={() => login(demoUser)}
//             className="btn">Demo Log In
//       </Link>
//     </div>
//   );
// };
//
//
// const Greeting = ({ currentUser, logout }) => (
//   currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
// );

export default Greeting;
