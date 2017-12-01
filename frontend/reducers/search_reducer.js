import { RECEIVE_SEARCH_RESULTS
} from '../actions/project_actions';

const searchReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.receiveSearchResults;

    default:
      return state;
  }
};

export default searchReducer;
