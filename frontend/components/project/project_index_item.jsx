import React from 'react';

import { Link } from 'react-router-dom';

export default ({project}) => {
  return (
    <li className="project-index-item">
      <Link to={`/projects/${project.id}`}>
        <img
          src={project.img_url}
          height = "300px"
          width = "300px"
          className="project-index-img" />
      </Link>

      <span>{project.title}</span>
      <span>by {project.creator.name} in {project.category}</span>
    </li>
  );
};
