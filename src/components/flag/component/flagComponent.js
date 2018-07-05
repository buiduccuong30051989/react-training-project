import React from 'react';
import ReactDOM from 'react-dom';

const Flag = props => {
  return (
    <React.Fragment>
      <button onClick={props.counterPlus}>PLUS</button>
      <button disabled>{props.flag}</button>
      <button onClick={props.counterMinus}>MINUS</button>
    </React.Fragment>
  );
}

export default Flag;
