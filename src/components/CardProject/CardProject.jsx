import React from 'react';
import '../../styles/CardProject.scss';

const CardProject = ({ projectName, projectImage, projectYear }) => {
  return (
    <div className="card">
      <img src={projectImage} alt="" />
      {/* <h2> {projectName} </h2>
      <h3> {projectYear} </h3> */}
    </div>
  );
};

export default CardProject;
