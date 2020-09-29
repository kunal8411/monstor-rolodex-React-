import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'
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
  handleChange= (e)=>{
     this.setState({searchField: e.target.value})
  }
  render(){
    const { monstors, searchField } = this.state;
    const filteredMonstors = monstors.filter(monstor =>
        monstor.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <SearchBox
          placeholder='Search Monster'
          handleChange= {this.handleChange}
        />
        <CardList monstors= {filteredMonstors}/>
      </div>
    );
  }
}

export default App;
