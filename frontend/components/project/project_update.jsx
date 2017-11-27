import React from 'react';
import ReactQuill from 'react-quill';
import Dropzone from 'react-dropzone';
import DropzoneComponent from 'react-dropzone-component';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'trungvu';
const CLOUDINARY_UPLOAD_URL = ' https://api.cloudinary.com/v1_1/trungvuh/image/upload';

// const Preview = (props) => (
// (props.file) ?
//   <div>
//     <img style={{width: '100px', height: '100px'}} src={props.file.preview}/>
//   </div> : <div>Drop an image or click here to upload a file</div>
// );

class ProjectUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.project;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQuillInput = this.handleQuillInput.bind(this);
    this.navigateToShow = this.navigateToShow.bind(this);
  }

  componentWillUnmount() {
    this.props.receiveProjectErrors([]);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.project.id);
  }

  componentWillReceiveProps(nextProps) {
    const project = this.state;
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

  navigateToShow() {
    this.props.history.push(`/projects/${this.props.project.id}`);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateProject(this.state)
      .then(() => this.navigateToShow());
  }

  onImageDrop(files) {
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                     .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                     .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          img_url: response.body.secure_url
        });
      }
    });
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

          <br/>
          <label>
            <Dropzone
              onDrop={this.onImageDrop.bind(this)}
              multiple={false}
              accept="image/*">
              <div>Drop an image or click here to upload a file</div>  
            </Dropzone>
          </label>

          <label>Description
            <ReactQuill
              onChange={this.handleQuillInput}
              value={this.state.description}
              className='quill'/>
          </label>

          <input type="submit" value="Update Your Project" />
          <button onClick={this.navigateToShow}>
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

// <Preview file={this.state.file}/>


export default ProjectUpdate;
