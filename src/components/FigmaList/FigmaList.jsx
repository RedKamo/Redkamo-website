import React from 'react';

import data from '../../data.json';
import FigmaCard from './FigmaCard';

const FigmaList = () => {
  return (
    <div className="cardlist">
      {data.Wireframes.map((wireframe, id) => {
        return (
          <FigmaCard
            key={id}
            wireframeName={wireframe.name}
            wireframeImage={wireframe.image}
            wireframeUrl={wireframe.url}
          />
        );
      })}
    </div>
  );
};
export default FigmaList;
