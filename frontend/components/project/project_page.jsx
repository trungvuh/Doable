import React from 'react';

import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../utils/route_util';

import ProjectDetailContainer from './project_detail_container';
import ProjectCreateContainer from './project_create_container';
import ProjectUpdateContainer from './project_update_container';

const ProjectPage = () => (
  <Switch>
    <ProtectedRoute path="/projects/new" component={ProjectCreateContainer} />
    <ProtectedRoute path="/projects/:projectId/edit" component={ProjectUpdateContainer} />
    <ProtectedRoute path="/projects/:projectId" component={ProjectDetailContainer} />
  </Switch>
);

export default ProjectPage;
