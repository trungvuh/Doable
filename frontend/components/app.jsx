import React from 'react';

import { Route, Link } from 'react-router-dom';
import { AuthRoute } from '../utils/route_util';

import Logo from './util/logo';
import BackgroundImg from './util/background_img';
import Footer from './util/footer';

import SessionFormContainer from './session_form/session_form_container';
import SessionWelcome from './session_form/session_welcome';

// import SearchContainer from './bench_index/search_container';


// <img src="http://res.cloudinary.com/trungvuh/image/upload/v1511315505/Baymax_cm87vo.png" className="logo"/>

const App = () => (
  <div className="whole-page">
    <header className="header-nav">
      <Logo />
    </header>

    <Route exact path='/' component={BackgroundImg}/>

    <div className="session-page">
      <AuthRoute path='/login' component={SessionFormContainer}/>
      <AuthRoute path='/login' component={SessionWelcome}/>

      <AuthRoute path='/signup' component={SessionFormContainer}/>
      <AuthRoute path='/signup' component={SessionWelcome}/>
    </div>

    <footer className='footer-nav'>
      <Footer />
    </footer>

  </div>
);

// <Route exact path='/' component={SearchContainer}/>

export default App;
