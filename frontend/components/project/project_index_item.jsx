import React from 'react';

import { Link } from 'react-router-dom';
import LoadingIcon from '../util/loading_icon';


export default ({project}) => {
  if (!project) {
    return (
      <LoadingIcon loading={true}/>
    );
  }
  else {
    return (
      <li className="project-index-item">
        <Link to={`/projects/${project.id}`}>
          <img
            src={project.img_url}
            height = "250px"
            width = "300px"
            className="project-index-img" />
        </Link>
        <div className="project-index-item-text">
          <span id="item-title">{project.title}</span>
          <span>by {project.creator.name} in {project.category}</span>
        </div>
      </li>
    );
  }
};
