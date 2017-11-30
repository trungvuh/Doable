import React from 'react';
import Moment from 'react-moment';

class CommentsShowItem extends React.Component {
  constructor(props) {
    super(props);

    this.showDelete = this.showDelete.bind(this);
  }

  showDelete() {
    const { author, deleteComment, currentUser, commentId } = this.props;
    if ( author !== currentUser.username) {
      return (
        <div></div>
      );
    }
    else {
      return (
        <i className="fa fa-trash fa-2x" onClick={() => deleteComment(commentId)}></i>
      );
    }
  }

  render() {
    const { body, author, created } = this.props;
    return (
      <li className="comment-form-area">
        <div className="comment-body">{body}</div>
        <div className='comment-author'>
          <span>{author}</span>
          <span><Moment fromNow>{ created }</Moment></span>
          {this.showDelete()}
        </div>
      </li>
    );
  }
}

export default CommentsShowItem;
