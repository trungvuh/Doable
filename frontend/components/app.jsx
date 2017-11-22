import React from 'react';

import { Route, Link } from 'react-router-dom';
import { AuthRoute } from '../utils/route_util';

import Logo from './logo';
import SessionFormContainer from './session_form/session_form_container';
import BackgroundImg from './background_img';
// import SearchContainer from './bench_index/search_container';


// <img src="http://res.cloudinary.com/trungvuh/image/upload/v1511315505/Baymax_cm87vo.png" className="logo"/>

const App = () => (
  <div>
    <header className="header-nav">
      <Logo />
    </header>

    <Route exact path='/' component={BackgroundImg}/>

    <AuthRoute path='/login' component={SessionFormContainer}/>
    <AuthRoute path='/signup' component={SessionFormContainer}/>
  </div>
);
// <Route exact path='/' component={SearchContainer}/>

export default App;
