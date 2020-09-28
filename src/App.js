import React, {Component} from 'react';

import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      monstors:[
        {
          name:"Superman",
          id:123
        },
        {
          name:"Shaktiman",
          id:1234
        },
        {
          name:"Batman",
          id:123456
        }
      ]
    }
  }
  render(){
    return (
      <div className="App">
        {
          this.state.monstors.map(monster=>(
          <h1 key={monster.id}>{monster.name}</h1>
          ))
        }
      </div>
    );
  }
}

export default App;
