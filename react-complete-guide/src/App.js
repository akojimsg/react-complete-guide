import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      { id: "p1", name: 'Max', age: 28 },
      { id: "p2", name: 'Manu', age: 29 },
      { id: "p3", name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    user:{
      name: "Mbapuune! Akosuu"
    }
  }

  switchNameHandler = (newName, ndx) => {
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    let updatedPersons = this.state.persons;
    updatedPersons[ndx].name = newName;

    this.setState( {
      persons: updatedPersons,
      user: this.state.user
    } )
    //console.log(this.state.persons);
  }

  nameChangedHandler = (event, ndx) => {
    let updatedPersons = this.state.persons;
    updatedPersons[ndx].name = event.target.value;

    this.setState( {
      persons: updatedPersons,
      user: this.state.user
    } )
  }

  userNameChangedHandler = (e) => {
    
    let newUser = this.state.user
    newUser.name = e.target.value

    this.setState({
      persons: this.state.persons,
      user: newUser
    });
  }

  render () {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={() => this.switchNameHandler('Maximilian!!',1)}>Switch Name</button>
        <Person 
          id="person1"
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          changed={(e) => this.nameChangedHandler(e,0)}>I play chess very often</Person>
{/*         <Person 
          id="person2"
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={(e) => this.nameChangedHandler(e,1)} >My Hobbies: Racing</Person> */}
        <Person 
          id="person3"
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          changed={(e) => this.nameChangedHandler(e,2)} >Cooking is fun</Person>
        <UserOutput username={this.state.user.name} changed={(e) => this.userNameChangedHandler(e)}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
