import React from 'react';
import '../../styles/CardProject.scss';

const FigmaCard = ({ wireframeName, wireframeImage, wireframeUrl }) => {
  return (
    <div className="card">
      <img src={wireframeImage} />
      <div className="card__info">
        <h2>{wireframeName}</h2>
        <div className="card__info__link">
          <a href={wireframeUrl} target="_blank">
            Figma
          </a>
        </div>
      </div>
    </div>
  );
};

export default FigmaCard;
