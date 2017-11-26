import React from 'react';

class ProjectCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "asdfaasdf",
      description: "asdfasdf",
      category: "asdfasdf",
      img_url: "https://res.cloudinary.com/trungvuh/image/upload/c_fill,h_500,w_500,y_0/v1511543426/busyboardsquare-1_lz7cma.jpg",
      creator_id: this.props.currentUser.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    document.title = "Doable - Create";
  }

  handleInput(type) {
    return (event) => {
      this.setState({ [type]: event.target.value });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createProject(this.state);
  }

  // renderErrors() {
  //   return (
  //     <ul>
  //       {
  //         this.props.errors.map((error) => (
  //           <li key={error}>{error}</li>))
  //       }
  //     </ul>
  //   );
  // }

  // {this.renderErrors}

  render () {
    // console.log(this.props.currentUser);
    return (
      <div>
        <h1>Create a New Project</h1>
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
          <button>Create Your Project</button>
        </form>
      </div>
    );
  }
}

export default ProjectCreate;
