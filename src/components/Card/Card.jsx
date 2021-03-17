import React from 'react';

import Projects from '../../projects.json';

const Card = () => {
  return (
    <div className="card">
      {Projects.map((project) => (
        <h1 key={project.id}> {project.name} </h1>
      ))}
    </div>
  );
};

export default Card;
