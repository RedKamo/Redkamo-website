import React from 'react';

import data from '../../data.json';
import CodepenCard from './CodepenCard';

const CodepenList = () => {
  return (
    <div className="cardlist">
      {data.Codepen.map((codepen, id) => {
        return (
          <CodepenCard
            key={id}
            codepenName={codepen.name}
            codepenChallenge={codepen.challenge}
            codepenImage={codepen.img}
            codepenUrl={codepen.url}
          />
        );
      })}
    </div>
  );
};
export default CodepenList;
