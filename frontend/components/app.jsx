import React from 'react';

import { Route, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

import Logo from './util/logo';
import Footer from './util/footer';
import HomePage from './util/homepage';

import ProjectDetailContainer from './project/project_detail_container';
import SessionPage from './session_form/session_page';

const App = () => (
  <div className="whole-page">
    <header className="header-nav">
      <Logo />
    </header>

    <HomePage />

    <ProtectedRoute path="/projects/:projectId" component={ProjectDetailContainer} />

    <SessionPage />

    <footer className='footer-nav'>
      <Footer />
    </footer>

  </div>
);

export default App;
