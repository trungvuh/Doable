import {
  RECEIVE_PROJECTS,
  RECEIVE_PROJECT,
  REMOVE_PROJECT,
} from '../actions/project_actions';
import merge from 'lodash/merge';

const projectReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PROJECTS:
      return merge({}, state, action.projects);

    case RECEIVE_PROJECT:
      return merge({}, state, {[action.project.id]: action.project});

    case REMOVE_PROJECT:
      let nextState = merge({}, state);
      delete nextState[action.projectId];
      return nextState;

    default:
      return state;
  }

};

export default projectReducer;
