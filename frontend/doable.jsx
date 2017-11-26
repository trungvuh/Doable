import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

// import { fetchProjects } from '../../actions/project_actions';
// import { login, signup, logout } from './utils/session_api_util';
import { createProject } from './actions/project_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
    delete window.currentUser;
  }
  else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.createProject = createProject;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
