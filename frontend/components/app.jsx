import React from 'react';

import { Route } from 'react-router-dom';
import { AuthRoute } from '../utils/route_util';

import GreetingContainer from './navbar/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
// import SearchContainer from './bench_index/search_container';


const App = () => (
  <div>
    <header className="nav-bar">
      <h1>Doable</h1>
      <GreetingContainer />
    </header>

    <AuthRoute path='/login' component={SessionFormContainer}/>
    <AuthRoute path='/signup' component={SessionFormContainer}/>
  </div>
);
// <Route exact path='/' component={SearchContainer}/>

export default App;
