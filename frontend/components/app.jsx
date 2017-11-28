import React from 'react';

import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

import Header from './util/header';
import Footer from './util/footer';
import HomePage from './util/homepage';
import ProjectPage from './project/project_page';


import SessionPage from './session_form/session_page';

const App = () => (
  <div className="whole-page">
    <Header />

    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/projects' component={HomePage} />
    </Switch>

    <ProjectPage />
    <SessionPage />

    <footer className='footer-nav'>
      <Footer />
    </footer>

  </div>
);

export default App;
