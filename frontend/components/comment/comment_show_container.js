import { connect } from 'react-redux';
import {
  fetchComments, updateComment, deleteComment
} from '../../actions/comment_action';
import { commentSelector } from '../../reducers/selector';

import CommentsShow from './comments_show';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  projectId: ownProps.projectId,
  comments: commentSelector(state.entities, ownProps.projectId)
});

const mapDispatchToProps = (dispatch) => ({
  fetchComments: () => dispatch(fetchComments()),
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsShow);
