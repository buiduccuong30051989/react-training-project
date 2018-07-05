import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Redirect, withRouter } from 'react-router-dom';
import Topic from './topicComponent';

const Topics = (props) => {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${props.match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${props.match.url}/:topicId`} component={Topic} />
      <Route
        exact
        path={props.match.url}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

export default Topics;
