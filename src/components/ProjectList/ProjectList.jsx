import React from 'react';

//import Projects from '../../projects.json';
import '../../styles/ProjectList.scss';
import data from '../../data.json';
import CardProject from '../CardProject/CardProject';

const ProjectList = () => {
  return (
    <div className="cardlist">
      {data.Projects.map((project, id) => {
        return (
          <CardProject
            key={id}
            projectName={project.name}
            projectImage={project.image}
            projectYear={project.year}
            projectUrl={project.url}
            projectDemo={project.demo}
          />
        );
      })}
    </div>
  );
};

export default ProjectList;
