import { combineReducers } from 'redux';

import projects from './project_reducer';
import comments from './comment_reducer';
import searchReducer from './search_reducer';

const entitiesReducer = combineReducers({
  projects,
  comments,
  searchResults: searchReducer
});

export default entitiesReducer;
