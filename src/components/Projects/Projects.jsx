import React from 'react';
import ProjectList from '../ProjectList/ProjectList';
import '../../styles/Projects.scss';
import alien from '../../assets/images/project1.svg';
const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects </h1>
      <div className="projects__container">
        <ProjectList />
      </div>
    </div>
  );
};

export default Projects;
