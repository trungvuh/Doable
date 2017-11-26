import React from 'react';
import { Route } from 'react-router-dom';

import BackgroundImg from './background_img';
import ProjectIndexContainer from '../project/project_index_container';

const HomePage = () => (
  <div>
    <BackgroundImg />
    <ProjectIndexContainer />
  </div>
);

export default HomePage;
