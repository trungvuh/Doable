import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

// import { fetchProjects } from '../../actions/project_actions';
// import { login, signup, logout } from './utils/session_api_util';
import { createProject } from './actions/project_actions';

document.addEventListener('DOMContentLoaded', () => {
  let project = ({title: "Toddler Busy Board: Peek-a-Boo Edition",
  description: "aokmasdofkmadfom",
  category: "Busy Board",
  img_url: "https://res.cloudinary.com/trungvuh/image/upload/c_fill,h_500,w_500,y_0/v1511543426/busyboardsquare-1_lz7cma.jpg",
  creator_id: 166});
  
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

  window.createProject = () => dispatch(createProject(project));

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
