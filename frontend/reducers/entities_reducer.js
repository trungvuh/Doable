import { combineReducers } from 'redux';

import projects from './project_reducer';
import comments from './comment_reducer';

const entitiesReducer = combineReducers({
  projects,
  comments,
});

export default entitiesReducer;
