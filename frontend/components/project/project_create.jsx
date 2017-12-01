import React from 'react';
import ReactQuill from 'react-quill';
import Dropzone from 'react-dropzone';
import request from 'superagent';

class ProjectCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      category: "",
      img_url: "",
      creator_id: this.props.currentUser.id,
      msg: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateHome = this.navigateHome.bind(this);
    this.handleQuillInput = this.handleQuillInput.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  componentWillUnmount() {
    this.props.receiveProjectErrors([]);
  }

  handleQuillInput(value) {
    this.setState({ description: value });
  }

  handleInput(type) {
    return (event) => {
      this.setState({ [type]: event.target.value });
    };
  }

  navigateHome() {
    this.props.history.push(`/`);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createProject(this.state)
      .then((project) => this.props.history.push(`/projects/${project.id}`));
  }

  displayMessage(message) {
    return (
      <div>{message}</div>
    );
  }

  handleUpload(event) {
    event.preventDefault();
    cloudinary.openUploadWidget(window.cloudinary_options, function(error, results){
     if(!error){
       this.setState({
         img_url: results[0].url,
         msg: 'Upload Successful!'
       });
     }
   }.bind(this));
  }

  renderErrors() {
    return (
      <ul className="errors">
        {
          this.props.errors.map((error) => (
            <li key={error}>{error}</li>))
        }
      </ul>
    );
  }

  render () {
    const {loading} = this.props;
    const modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [{'list': 'ordered'}, {'list': 'bullet'}],
        ['link', 'image', 'video'],
        [{'color': [] }, {'background': [] }],
      ],
    };

    return (
      loading ?
      <LoadingIcon loading={true} /> :
      <div className="project-detail">
        <h1>Create a New Project</h1>
          {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>

          <label className="detail-label">Title:
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleInput('title')}
              placeholder="Add your Title"
              />
          </label>

          <label className="detail-label">Category:
            <input
              type="text"
              value={this.state.category}
              onChange={this.handleInput('category')}
              placeholder="Category"
              />
          </label>

          <br/>
          <label className="detail-label">Project Picture:
            <button onClick={this.handleUpload}
              className="upload-btn">Upload Project Picture
            </button>
            <div className="success-msg">
              {this.state.msg}
            </div>
          </label>

          <span className="detail-label"
            id="descript">Description:</span>

          <br/><br/>
          <div className='quill'>
            <ReactQuill
              onChange={this.handleQuillInput}
              value={this.state.description}
              theme="snow"
              modules={modules}
              placeholder="Compose your description here"
            />
          </div>
          <div className='project-form-button'>
            <input type="submit" value="Create Project"
              className='upload-btn' />
            <button
              onClick={this.navigateHome}
              className='upload-btn'>
              Cancel
            </button>
          </div>

        </form>
      </div>
    );
  }
}

export default ProjectCreate;
