import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component{
  constructor(){
    super(); //super calls the constructor method on the component class and it gives access to "this.state"

    this.state = {
      monsters: [],
      searchField: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) =>{
    this.setState({ searchField: e.target.value});
  }
  
  render(){
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField'; //both are same as what is below

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
