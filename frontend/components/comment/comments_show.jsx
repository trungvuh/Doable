import React from 'react';
import Moment from 'react-moment';

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
    console.log(this.props);
    if (!this.props.comments) {
      return (
        <div></div>
      );
    }
    return (
      <ul>
        {
          this.props.comments.map( comment =>
          <CommentsShowItem
            key={comment.id}
            body={comment.body}
            author={comment.author.name}
            created={comment.created_at}
            update={this.props.updateComment}
            delete={this.props.deleteComment}
          />)
        }
      </ul>
    );
  }
}

export default CommentsShow;
