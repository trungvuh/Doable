import React from 'react';

export default ({project}) => {
  return (
    <li className="project-index-item">
      <img
        src={project.img_url}
        height = "300px"
        width = "300px"
        className="project-index-img" />
      <span>{project.title}</span>
      <span>by {project.creator.username} in {project.category}</span>
    </li>
  );
};
