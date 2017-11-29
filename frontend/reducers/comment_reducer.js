import {
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_action';
import merge from 'lodash/merge';

const commentReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch (action.type) {
    case RECEIVE_COMMENT:
      const comment = action.comment;
      nextState[comment.project_id].comments.push(comment);
      return nextState;

    case REMOVE_COMMENT:


    default:
      return state;
  }
};

export default commentReducer;
