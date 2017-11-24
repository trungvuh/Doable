import React from 'react';

import { Route, Link } from 'react-router-dom';
import { AuthRoute } from '../utils/route_util';

import Logo from './util/logo';
import BackgroundImg from './util/background_img';
import Footer from './util/footer';

import SessionPage from './session_form/session_page';

// import SearchContainer from './bench_index/search_container';


// <img src="http://res.cloudinary.com/trungvuh/image/upload/v1511315505/Baymax_cm87vo.png" className="logo"/>

const App = () => (
  <div className="whole-page">
    <header className="header-nav">
      <Logo />
    </header>

    <Route exact path='/' component={BackgroundImg}/>

    <SessionPage />

    <footer className='footer-nav'>
      <Footer />
    </footer>

  </div>
);

// <Route exact path='/' component={SearchContainer}/>

export default App;
