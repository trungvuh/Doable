import React from 'react';
import Parser from 'html-react-parser';
import { render } from 'react-dom';

class ProjectDetail extends React.Component {

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.props.fetchProject(nextProps.match.params.projectId);
    }
  }

  // renderDescription() {
  //   render(
  //     Parser(`${this.props.project.description}`)
  //   );
  // }

  render() {
    const { project } = this.props;

    if (!project) {
      return (
        <div> Loading </div>
      );
    }
    else {
      return (
        <div className="project-detail">
          <img
            src={project.img_url}
            height = "600px"
            width = "600px"
            className="project-detail-img" />
          <h1>{project.title}</h1>
          <span>Category: {project.category}</span>
          <span>by {project.creator.name}</span>
          <div className="project-description">
            {project.description}
          </div>
        </div>
      );
    }
  }
}

export default ProjectDetail;
