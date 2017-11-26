export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';

export const LOADING_PROJECT = 'LOADING_PROJECT';
export const LOADING_PROJECTS = 'LOADING_PROJECTS';

import * as ProjectAPIUtil from '../utils/project_api_util';


export const fetchProjects = () => dispatch => {
  dispatch(loadingProjects());
  return (
    ProjectAPIUtil.fetchProjects()
    .then(projects => dispatch(receiveProjects(projects)))
  );
};

export const fetchProject = id => dispatch => {
  dispatch(loadingProject());
  return (
    ProjectAPIUtil.fetchProject(id)
    .then(project => dispatch(receiveProject(project)))
  );
};

export const createProject = project => dispatch => (
  ProjectAPIUtil.createProject(project)
  .then(newProject => {
    dispatch(receiveProject(newProject));
    return newProject;
  }).fail(error => dispatch(receiveProjectErrors(error.responseJSON)))
);

export const updateProject = project => dispatch => (
  ProjectAPIUtil.updateProject(project)
  .then(newProject => {
    dispatch(receiveProject(newProject));
    return newProject;
  }).fail(error => dispatch(receiveProjectErrors(error.responseJSON)))
);

export const deleteProject = projectId => dispatch => (
  ProjectAPIUtil.deleteProject(projectId)
    .then(
      project => dispatch(removeProject(projectId)),
      error => dispatch(receiveProjectErrors(error.responseJSON))
    )
);


export const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});

export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

export const removeProject = projectId => ({
  type: REMOVE_PROJECT,
  projectId
});

export const receiveProjectErrors = errors => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors
});

export const loadingProjects = () => ({
  type: LOADING_PROJECTS
});

export const loadingProject = () => ({
  type: LOADING_PROJECT
});
