import React from 'react';
import Moment from 'react-moment';

const CommentShow = ({ body, author, created }) => {

  return (

    <li className="comment-body">
      <span>{body}</span>
      <span>
        by {author}
        <Moment fromNow>{ created }</Moment>
      </span>
    </li>

  );
};

export default CommentShow;
