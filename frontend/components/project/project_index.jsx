import React from 'react';

import ProjectIndexItem from './project_index_item';
import LoadingIcon from '../util/loading_icon';

class ProjectIndex extends React.Component {

  componentDidMount() {
    this.props.fetchProjects();
  }

  render () {
    const { projects, loading } = this.props;

    if (!projects) {
      return (
        <LoadingIcon loading={true}/>
      );
    }
    else {
      return (
        <div className="projects-index">
          <ul>
            {
              projects.map(project => <ProjectIndexItem key={project.id} project={project}
               />)
            }
          </ul>
        </div>
      );
    }
  }
}

export default ProjectIndex;
