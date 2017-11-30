import React from 'react';
import Moment from 'react-moment';

class CommentsShowItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { body, author, created } = this.props;

    return (
      <li className="comment-form-area">
        <div className="comment-body">{body}</div>
        <div className='comment-author'>
          <span>{author}</span>
          <span><Moment fromNow>{ created }</Moment></span>
        </div>
      </li>
    );
  }
}

export default CommentsShowItem;
