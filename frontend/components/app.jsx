import React from 'react';

import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

import Logo from './util/logo';
import Footer from './util/footer';
import HomePage from './util/homepage';

import ProjectDetailContainer from './project/project_detail_container';
import ProjectCreateContainer from './project/project_create_container';
import ProjectUpdateContainer from './project/project_update_container';

import SessionPage from './session_form/session_page';

const App = () => (
  <div className="whole-page">
    <header className="header-nav">
      <Logo />
    </header>

    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/projects' component={HomePage} />
    </Switch>

    <Switch>
      <ProtectedRoute path="/projects/new" component={ProjectCreateContainer} />
      <ProtectedRoute path="/projects/:projectId/edit" component={ProjectUpdateContainer} />
      <ProtectedRoute path="/projects/:projectId" component={ProjectDetailContainer} />
    </Switch>
  
    <SessionPage />

    <footer className='footer-nav'>
      <Footer />
    </footer>

  </div>
);

export default App;
