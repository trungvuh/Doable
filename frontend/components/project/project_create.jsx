import React from 'react';

class ProjectCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      category: "",
      img_url: "",
      creator_id: this.props.currentUser.id
    };

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
      .then(() => this.props.history.push('/'));
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
        <h1>Create a New Project</h1>
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
          <input type="submit" value="Create Project" />
        </form>
      </div>
    );
  }
}

export default ProjectCreate;
