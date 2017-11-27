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

  componentDidMount() {
    if (this.props.match.params.projectId) {
      this.props.fetchProject(this.props.match.params.projectId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.props.fetchProject(nextProps.match.params.projectId);
    }
    this.setState(nextProps.project);
  }

  handleInput(type) {
    return (event) => {
      this.setState({ [type]: event.target.value });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateProject(this.state)
      .then(() => this.props.history.push(`/projects/${this.props.project.id}`));
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
              rows="20"
              cols="60"
              ></textarea>
          </label>
          <input type="submit" value="Update Your Project" />
        </form>
      </div>
    );
  }
}

export default ProjectUpdate;
