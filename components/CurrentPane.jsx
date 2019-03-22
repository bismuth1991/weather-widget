import React from 'react';

const CurrentPane = ({
  cityInfo,
  currentHiTemp,
  currentLoTemp,
}) => (
  <div>
    <h1>{cityInfo.name}</h1>
    <p>{`Low: ${currentLoTemp}`}</p>
    <p>{`High: ${currentHiTemp}`}</p>
  </div>
);

export default CurrentPane;
