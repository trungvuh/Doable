import {
  RECEIVE_PROJECTS,
  RECEIVE_PROJECT,
  REMOVE_PROJECT,
} from '../actions/project_actions';
import {
  RECEIVE_COMMENT
} from '../actions/comment_action';

import merge from 'lodash/merge';

const projectReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch (action.type) {
    case RECEIVE_PROJECTS:
      return merge({}, state, action.projects);

    case RECEIVE_PROJECT:
      return merge({}, state, {[action.project.id]: action.project});

    case REMOVE_PROJECT:
      delete nextState[action.projectId];
      return nextState;

    case RECEIVE_COMMENT:
     const comment = action.comment;
     const project = nextState[comment.project_id];
     project.comments.push(comment);
     return nextState;

    default:
      return state;
  }

};

export default projectReducer;
