import {
  RECEIVE_PROJECT,
  RECEIVE_PROJECTS,
  REMOVE_PROJECT,
  RECEIVE_PROJECT_ERRORS,
  LOADING_PROJECT,
  LOADING_PROJECTS
} from '../actions/project_actions';

import merge from 'lodash/merge';

const initialState = {
  indexLoading: false,
  detailLoading: false,
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PROJECTS:
      return merge({}, state, { indexLoading: false });

    case RECEIVE_PROJECT:
      return merge({}, state, { detailLoading: false });

    case REMOVE_PROJECT:
    case RECEIVE_PROJECT_ERRORS:
      return merge({}, state, { detailLoading: false });

    case LOADING_PROJECTS:
      return merge({}, state, { indexLoading: true });

    case LOADING_PROJECT:
      return merge({}, state, { detailLoading: true });

    default:
      return state;
  }
};

export default loadingReducer;
