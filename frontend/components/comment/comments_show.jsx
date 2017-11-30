import React from 'react';
import Moment from 'react-moment';

import LoadingIcon from '../util/loading_icon';
import CommentsShowItem from './comment_show_item';

class CommentsShow extends React.Component {
  constructor(props) {
    super(props);
  }
  //
  // componentDidMount() {
  //   this.props.fetchComments();
  // }

  render () {
    if (!this.props.comments) {
      return (
        <LoadingIcon loading={true} />
      );
    }
    return (
      <ul>
        {
          this.props.comments.map( comment =>
          <CommentsShowItem
            key={comment.id}
            commentId={comment.id}
            body={comment.body}
            author={comment.author.name}
            created={comment.created_at}
            updateComment={this.props.updateComment}
            deleteComment={this.props.deleteComment}
            currentUser={this.props.currentUser}
          />)
        }
      </ul>
    );
  }
}

export default CommentsShow;
