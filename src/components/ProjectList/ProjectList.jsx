import React from 'react';

//import Projects from '../../projects.json';
import data from '../../data.json';
import CardProject from '../CardProject/CardProject';

const ProjectList = () => {
  return (
    <div className="cardList">
      {data.Projects.map((project, id) => {
        return (
          <CardProject
            key={id}
            projectName={project.name}
            projectImage={project.image}
            projectYear={project.year}
          />
        );
      })}
    </div>
  );
};

export default ProjectList;

/* {pj.map((project) => {
  return (
    <div key={project.id}>
      <h1> {project.name} </h1>
      <img src={project.image} alt="" />
      <img src={project.url} alt="" />
    </div>
  );
})} */
