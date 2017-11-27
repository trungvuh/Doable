import React from 'react';
import Parser from 'html-react-parser';
import LoadingIcon from '../util/loading_icon';
import { Link } from 'react-router-dom';

import { render } from 'react-dom';

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.props.fetchProject(nextProps.match.params.projectId);
    }
  }

  projectButton() {
    const currentUserId = this.props.currentUser.id;
    const creatorId = this.props.project.creator.id;
    const project = this.props.project;

    if ( currentUserId !== creatorId ) {
      return (
        <div></div>
      );
    }
    else {
      return (
        <div>
          <Link to={`/projects/${project.id}/edit`}>
            <button>Edit Your Project</button>
          </Link>
          <button
            onClick={() => this.props.deleteProject(project.id)
              .then(() => this.props.history.push('/'))}>
              Delete Project
          </button>
        </div>
      );
    }
  }

  render() {
    const { project, loading } = this.props;
    if (!project) {
      return (
        <LoadingIcon loading={loading}/>
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
          <div>Category: {project.category}</div>
          <div>Created by: {project.creator.name}</div>
          <div className="project-description">
            {Parser(project.description)}
          </div>

          {this.projectButton()}
        </div>
      );
    }
  }
}

export default ProjectDetail;
