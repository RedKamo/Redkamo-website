import React from 'react';
import '../../styles/CardProject.scss';

const CardProject = ({
  projectName,
  projectImage,
  projectUrl,
  projectDemo,
  projectInfo
}) => {
  return (
    <div className="card">
      <img src={projectImage} alt="" />
      <div className="card__info">
        <h2>{projectName}</h2>
        <p>{projectInfo}</p>
        <div className="card__info__link">
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
