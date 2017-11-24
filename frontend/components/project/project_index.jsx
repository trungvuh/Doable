import React from 'react';

import ProjectIndexItem from './project_index_item';

class ProjectIndex extends React.Component {

  componentWillMount() {
    this.props.fetchProjects();
  }

  render () {
    const { projects } = this.props;

    return (
      <div className="projects-index">
        <ul>
          {
            projects.map(project => <ProjectIndexItem key={project.id} project={project} />)
          }
        </ul>
      </div>
    );
  }
}

export default ProjectIndex;
