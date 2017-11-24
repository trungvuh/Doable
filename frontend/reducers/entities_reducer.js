import { combineReducers } from 'redux';

import projects from './project_reducer';

const entitiesReducer = combineReducers({
  projects,
});

export default entitiesReducer;
