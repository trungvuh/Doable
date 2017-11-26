import React from 'react';

class ProjectUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.project;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.receiveProjectErrors([]);
  }

  handleInput(type) {
    return (event) => {
      this.setState({ [type]: event.target.value });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createProject(this.state)
      .then(this.props.history.push('/'));
  }

  renderErrors() {
    return (
      <ul>
        {
          this.props.errors.map((error) => (
            <li key={error}>{error}</li>))
        }
      </ul>
    );
  }


  render () {
    // console.log(this.props.currentUser);
    return (
      <div>
        <h1>Edit Project</h1>
          {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <label>Title:
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleInput('title')}
              />
          </label>
          <label>Category:
            <input
              type="text"
              value={this.state.category}
              onChange={this.handleInput('category')}
              />
          </label>
          <label>Image Link:
            <input
              type="text"
              value={this.state.img_url}
              onChange={this.handleInput('img_url')}
              />
          </label>
          <label>Description:
            <textarea
              type="text"
              value={this.state.description}
              onChange={this.handleInput('description')}
              height="480"
              width="320"
              ></textarea>
          </label>
          <button>Update Your Project</button>
        </form>
      </div>
    );
  }
}

export default ProjectUpdate;
