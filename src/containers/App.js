import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons : [
      {id: 1, name: 'Shubham', age : 28},
      {id: 2, name : 'Sakib', age : 29}
    ],
    showPersons : false
  }

  deletePersonHandler = (index) => {
    //const persons = this.state.persons.slice();   //slice also creates a copy of the object
    const persons = [...this.state.persons];  //makes copy of this.state.persons
    persons.splice(persons, 1);
    this.setState({persons:persons});
  }

  togglePersonsHandler = () =>  {
    const isVisible = this.state.showPersons;
    this.setState({showPersons:!isVisible});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id===id; //returns index in persons object where this condition is fullfilled
    });

    const person = {...this.state.persons[personIndex]}; //makes copy of that particular Person object we are trying to mutate

    person.name = event.target.value;

    const persons = [...this.state.persons]; //return copy (because we do not directly change object's value)
    persons[personIndex] = person;  //replace it in the copy

    this.setState({persons: persons});  //Update state
  }

  render() {
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          <Persons persons = {this.state.persons} 
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />                    
        </div>
      );      
    }
   
    return (
        <div className={classes.App}>
          <Cockpit showPersons = {this.state.showPersons} persons = {this.state.persons} clicked ={this.togglePersonsHandler} />
          {persons}      
        </div>          
    );
  }
}

export default App;
