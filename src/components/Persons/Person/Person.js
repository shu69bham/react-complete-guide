import React, { Component } from "react";

class Person extends Component {
  state = {};
  render() {
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
