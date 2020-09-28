import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component'

import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      monstors:[]
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=> response.json())
    .then(users=>this.setState({monstors:users}))

  }
  render(){
    return (
      <div className="App">
        <CardList>
        {
          this.state.monstors.map(monster=>(
          <h1 key={monster.id}>{monster.name}</h1>
          ))
        }
        </CardList>
       
      </div>
    );
  }
}

export default App;
