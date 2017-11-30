import React from 'react';
import ReactModal from 'react-modal';
import { withRouter } from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      author_id: this.props.currentUser.id,
      project_id: this.props.match.params.projectId,
    };

    // this.openModal = this.openModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //
  // openModal() {
  //   this.setState({ modalIsOpen: false });
  // }
  //
  // closeModal() {
  //   this.setState({ modalIsOpen: true });
  // }

  update(property){
    return event => {
      this.setState({ [property]: event.target.value });
    };
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.createComment(this.state)
      .then(() => this.setState({ body: ''}));
  }

  render () {
    return (
      <div className="comment-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.update('body')}
            value={this.state.body}
            placeholder="Cool project? Leave the baby a Comment..."
            className="comment-form-area"
            />
        </form>
      </div>
    );
  }
}

export default withRouter(CommentForm);
