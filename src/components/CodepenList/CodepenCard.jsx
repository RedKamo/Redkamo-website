import React from 'react';
import '../../styles/CardProject.scss';

const CodepenCard = ({
  codepenName,
  codepenChallenge,
  codepenImage,
  codepenUrl
}) => {
  return (
    <div className="card">
      <img src={codepenImage} />

      <div className="card__info">
        <h2>{codepenName}</h2>
        <p>{codepenChallenge}</p>
        <div className="card__info__link">
          <a href={codepenUrl} target="_blank">
            Pen
          </a>
        </div>
      </div>
    </div>
  );
};

export default CodepenCard;
