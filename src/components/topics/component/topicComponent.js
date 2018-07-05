import React from 'react';
import ReactDOM from 'react-dom';

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default Topic;
