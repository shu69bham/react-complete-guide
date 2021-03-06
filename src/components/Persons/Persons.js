import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[Persons.js] Inside constructor()");
  }

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    console.log("[Persons.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Persons.js] Inside componentDidMount()");
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    console.log(
      "[UPDATE Persons.js] Inside componentWillReceiveProps()",
      nextProps
    );
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "[UPDATE Persons.js] Inside shouldComponentUpdate()",
  //     this.props,
  //     nextProps,
  //     nextState
  //   );
  //   return true;
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log("[UPDATE Persons.js] Inside componentDidUpdate()");
  }

  render() {
    console.log("[Persons.js] Inside render()");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
