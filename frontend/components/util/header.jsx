import React from 'react';
import { Link } from 'react-router-dom';

import GreetingContainer from '../navbar/greeting_container';

const Header = () => (

  <header className="header-nav">
    <div className="nav-bar">

      <Link to='/' className="appname">Doable</Link>
      <div className="app-punch-line">Even a Baby Can Do It</div>

      <Link to='/projects/new'>
        <button className="nav-proj-btn">Create Project</button>
      </Link>
      <GreetingContainer  />
    </div>
  </header>
);

export default Header;
