import React from 'react';

import { Route } from 'react-router-dom';
import { AuthRoute } from '../utils/route_util';

import GreetingContainer from './navbar/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
// import SearchContainer from './bench_index/search_container';


// <img src="http://res.cloudinary.com/trungvuh/image/upload/v1511315505/Baymax_cm87vo.png" className="logo"/>

const App = () => (
  <div>
    <header className="header-nav">
      <div className="nav-bar">
        <span className="appname">Doable</span>
        <GreetingContainer className="GC" />
      </div>
    </header>

    <AuthRoute path='/login' component={SessionFormContainer}/>
    <AuthRoute path='/signup' component={SessionFormContainer}/>
  </div>
);
// <Route exact path='/' component={SearchContainer}/>

export default App;
