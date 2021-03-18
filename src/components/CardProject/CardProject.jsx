import React from 'react';

const CardProject = ({ projectName, projectImage, projectYear }) => {
  return (
    <div>
      <h1> {projectName} </h1>
      <img src={projectImage} alt="" />
      <h5> {projectYear} </h5>
    </div>
  );
};

export default CardProject;
