import React from 'react';
import ProjectList from '../ProjectList/ProjectList';
import '../../styles/Projects.scss';

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects </h1>
      <div className="projects__container">
        <ProjectList />
      </div>
      {/* <img src={alien} alt="" />
      <img className="projects__up" src={alienb} alt="" /> */}
    </div>
  );
};

export default Projects;
