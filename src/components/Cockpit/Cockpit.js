import React from "react";
import classes from "./Cockpit.css";
//import Aux from "../../hocs/Aux";

const cockpit = props => {
  let classes_toApply = [];
  if (props.persons.length <= 2) {
    classes_toApply.push("red");
  }
  if (props.persons.length <= 1) {
    classes_toApply.push("bold");
  }

  let btnClass = classes.Button;
  if (props.showPerson) {
    btnClass = classes.red;
  }

  return (
    <>
      <h1>{props.title}</h1>
      <p className={classes_toApply.join(" ")}>This is really working</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Person
      </button>
    </>
  );
};

export default cockpit;
