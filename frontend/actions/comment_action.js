export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

import * as CommentAPIUtil from '../utils/comment_api_util';


export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

export const fetchComments = () => dispatch => (
  CommentAPIUtil.fetchComments()
    .then( comments => dispatch(receiveComments(comments)))
);

export const fetchComment = id => dispatch => (
  CommentAPIUtil.fetchComment(id)
    .then( comment => dispatch(receiveComment(comment)))
);

export const createComment = comment => dispatch => (
  CommentAPIUtil.createComment(comment)
    .then( newComment => {
      dispatch(receiveComment(newComment));
      return newComment;
    })
);

export const deleteComment = commentId => dispatch => (
  CommentAPIUtil.deleteComment(commentId)
    .then( comment => dispatch(removeComment(commentId)))
);

export const updateComment = comment => dispatch => (
  CommentAPIUtil.updateComment(comment)
    .then( newComment => {
      dispatch(receiveComment(comment));
      return newComment;
    })
);
