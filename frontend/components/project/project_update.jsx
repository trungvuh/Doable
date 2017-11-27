import React from 'react';
import ReactQuill from 'react-quill';

class ProjectUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.project;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQuillInput = this.handleQuillInput.bind(this);
  }

  componentWillUnmount() {
    this.props.receiveProjectErrors([]);
  }

  componentDidMount() {
    if (this.props.match.params.projectId) {
      this.props.fetchProject(this.props.project.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { project } = this.props;
    this.setState(nextProps.project);
  }

  handleQuillInput(value) {
    this.setState({ description: value });
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
    console.log(this.props);
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

          <label>Edit
            <ReactQuill
              onChange={this.handleQuillInput}
              value={this.state.description}/>
          </label>

          <input type="submit" value="Update Your Project" />
        </form>
      </div>
    );
  }
}

export default ProjectUpdate;
