import React from 'react';
import { Link } from 'react-router-dom';

import GreetingContainer from '../navbar/greeting_container';



const Logo = () => (
  <div className="nav-bar">

    <Link to='/' className="appname">Doable</Link>
    <div className="app-punch-line">Even a Baby Can Do It</div>

    <Link to='/projects/new'>
      <button>Create Project</button>
    </Link>
    <GreetingContainer  />
  </div>
);

export default Logo;
