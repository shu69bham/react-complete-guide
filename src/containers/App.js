import React, { PureComponent } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hocs/withClass";

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[App.js] Inside constructor()");
  }

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    console.log("[App.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[App.js] Inside componentDidMount()");
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    console.log(
      "[UPDATE App.js] Inside componentWillReceiveProps()",
      nextProps
    );
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "[UPDATE App.js] Inside shouldComponentUpdate()",
  //     this.props,
  //     nextProps,
  //     nextState
  //   );
  //   return true;
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log("[UPDATE App.js] Inside componentDidUpdate()");
  }

  state = {
    persons: [
      { id: 1, name: "Shubham", age: 28 },
      { id: 2, name: "Sakib", age: 29 }
    ],
    showPersons: false,
    toggleCount: 0
  };

  deletePersonHandler = index => {
    //const persons = this.state.persons.slice();   //slice also creates a copy of the object
    const persons = [...this.state.persons]; //makes copy of this.state.persons
    persons.splice(persons, 1);
    //correct way of using setState
    this.setState((prevState, props) => {
      return { persons: persons, toggleCount: prevState.toggleCount + 1 };
    });
  };

  togglePersonsHandler = () => {
    const isVisible = this.state.showPersons;
    this.setState({ showPersons: !isVisible });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id; //returns index in persons object where this condition is fullfilled
    });

    const person = { ...this.state.persons[personIndex] }; //makes copy of that particular Person object we are trying to mutate

    person.name = event.target.value;

    const persons = [...this.state.persons]; //return copy (because we do not directly change object's value)
    persons[personIndex] = person; //replace it in the copy

    this.setState({ persons: persons }); //Update state
  };

  render() {
    console.log("[App.js] Inside render()");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      <>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show Persons
        </button>
        <Cockpit
          title={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </>
    );
  }
}

export default withClass(App, classes.App);
