import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component'

import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      monstors:[],
      searchField:""
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
        <input type="search" 
        placeholder="Search Monster"
        onChange={e=> 
          //setState is asynchronous function so pass the callback to make it sync
          this.setState({searchField: e.target.value})}
        
       
        /> 
        <CardList monstors= {this.state.monstors}/>
      </div>
    );
  }
}

export default App;
