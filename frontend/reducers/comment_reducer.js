import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_action';
import merge from 'lodash/merge';

const commentReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return merge({}, state, action.comments);

    case RECEIVE_COMMENT:
      return merge({}, state, {[action.comment.id]: action.comment});    

    case REMOVE_COMMENT:
      delete nextState[action.commentId];
      return nextState;

    default:
      return state;
  }
};

export default commentReducer;
