import React from 'react';
import '../../styles/CardProject.scss';

const CardProject = ({
  projectName,
  projectImage,
  projectYear,
  projectUrl,
  projectDemo
}) => {
  return (
    <div className="card">
      <img src={projectImage} alt="" />
      <div className="card__details">
        <p>{projectName}</p>
        <div className="card__details__link">
          <a href={projectUrl} target="_blank">
            Github
          </a>
          {projectDemo ? (
            <a href={projectDemo} target="_blank">
              Demo
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProject;
