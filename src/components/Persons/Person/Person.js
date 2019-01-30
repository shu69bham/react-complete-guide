import React from "react";

const person = props => {
  return (
    <div>
      <p onClick={props.click}>
        I'm {props.name}! {props.children}
      </p>
      <input type="text" value={props.name} onChange={props.changed} />
    </div>
  );
};

export default person;
