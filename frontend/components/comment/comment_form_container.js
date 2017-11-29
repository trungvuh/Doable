import { connect } from 'react-redux';

import { createComment } from '../../actions/comment_action';
import CommentForm from './comment_form';

const mapStatetoProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchtoProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment))
});

export default connect(mapStatetoProps, mapDispatchtoProps)(CommentForm);
