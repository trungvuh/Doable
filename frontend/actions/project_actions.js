export const RECEIVE_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_ONE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';

import * as ProjectAPIUtil from '../utils/project_api_util';


export const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});

export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

export const removeProject = project => ({
  type: REMOVE_PROJECT
});

export const receiveProjectErrors = errors => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors
});

export const fetchProjects = () => dispatch => (
  ProjectAPIUtil.fetchProjects()
    .then(allProjects => dispatch(receiveProjects(allProjects)))
);

export const fetchProject = id => dispatch => (
  ProjectAPIUtil.fetchProject(id)
    .then(oneProject => dispatch(receiveProject(oneProject)))
);

export const createProject = project => dispatch => (
  ProjectAPIUtil.createProject(project)
    .then(
      newProject => dispatch(receiveProject(newProject)),
      error => dispatch(receiveProjectErrors(error.responseJSON))
    )
);

export const updateProject = project => dispatch => (
  ProjectAPIUtil.updateProject(project)
    .then(
      newProject => dispatch(receiveProject(newProject)),
      error => dispatch(receiveProjectErrors(error.responseJSON))
    )
);

export const deleteProject = project => dispatch => (
  ProjectAPIUtil.deleteProject(project)
    .then(
      oldProject => dispatch(removeProject(oldProject)),
      error => dispatch(receiveProjectErrors(error.responseJSON))
    )
);
