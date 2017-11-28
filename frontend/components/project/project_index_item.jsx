import React from 'react';

import { Link } from 'react-router-dom';

export default ({project}) => {
  return (
    <li className="project-index-item">
      <Link to={`/projects/${project.id}`}>
        <img
          src={project.img_url}
          height = "275px"
          width = "325px"
          className="project-index-img" />
      </Link>
      <div className="project-index-item-text">
        <span id="item-title">{project.title}</span>
        <span>by {project.creator.name} in {project.category}</span>
      </div>
    </li>
  );
};
