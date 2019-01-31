import React, { Component } from "react";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside constructor()");
  }

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount()");
  }

  render() {
    console.log("[Person.js] Inside render()");
    return (
      <div>
        <p onClick={this.props.click}>
          I'm {this.props.name}! {this.props.children}
        </p>
        <input
          type="text"
          value={this.props.name}
          onChange={this.props.changed}
        />
      </div>
    );
  }
}

export default Person;
