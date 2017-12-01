import React from 'react';
import ReactQuill from 'react-quill';
// import Dropzone from 'react-dropzone';
import request from 'superagent';

import LoadingIcon from '../util/loading_icon';


class ProjectUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.project;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQuillInput = this.handleQuillInput.bind(this);
    this.navigateToShow = this.navigateToShow.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  componentWillUnmount() {
    this.props.receiveProjectErrors([]);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
    window.scrollTo(0,0);
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

  handleUpload(event) {
    event.preventDefault();
    cloudinary.openUploadWidget(window.cloudinary_options, function(error, results){
     if(!error){
       this.setState({
         img_url: results[0].secure_url,
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
    const project = this.state;
    const modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [{'list': 'ordered'}, {'list': 'bullet'}],
        ['link', 'image', 'video'],
        [{'color': [] }, {'background': [] }],
      ],
    };

    if (!project) {
      return (
        <LoadingIcon loading={true}/>
      );
    }
    else {
      return (
        <div className="project-detail">
          <h1>Edit Project</h1>
            {this.renderErrors()}
          <form
            onSubmit={this.handleSubmit}>

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
              className="upload-btn">Edit Project Picture
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
              <input type="submit" value="Update Project"
                className='upload-btn' />
              <button
                onClick={this.navigateToShow}
                className='upload-btn'>
                Cancel
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default ProjectUpdate;

// <Preview file={this.state.file}/>

// <label>
//   <Dropzone
//     onDrop={this.onImageDrop.bind(this)}
//     multiple={false}
//     accept="image/*">
//     <div>Drop an image or click here to upload a file</div>
//   </Dropzone>
// </label>

// const Preview = (props) => (
// (props.file) ?
//   <div>
//     <img style={{width: '100px', height: '100px'}} src={props.file.preview}/>
//   </div> : <div>Drop an image or click here to upload a file</div>
// );


  // onImageDrop(files) {
  //   this.handleImageUpload(files[0]);
  // }

  // handleImageUpload(file) {
  // const CLOUDINARY_UPLOAD_PRESET = 'trungvu';
  // const CLOUDINARY_UPLOAD_URL = ' https://api.cloudinary.com/v1_1/trungvuh/image/upload';
  //   let upload = request.post(CLOUDINARY_UPLOAD_URL)
  //                    .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
  //                    .field('file', file);
  //
  //   upload.end((err, response) => {
  //     if (err) {
  //       console.error(err);
  //     }
  //
  //     if (response.body.secure_url !== '') {
  //       this.setState({
  //         img_url: response.body.secure_url
  //       });
  //     }
  //   });
  // }
