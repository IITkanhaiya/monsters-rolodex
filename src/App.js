import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import {CardList} from './component/card-list/card-list.component';
import {SearchBox} from './component/search-box/search-box.component'
class App extends Component {
  constructor(){
    super();
    console.log(this);
    this.state = {
      monsters:[],
      searchField:''
      

    };
    //this.handleChange=this.handleChange.bind(this);"homepage": "https://IITkanhaiya.github.io/monsters-rolodex","predeploy": "npm build",
    //"deploy": "gh-pages -d build"
  }
  // handleChange(e)
  // {
  //  this.setState({searchField:e.target.value})
  //  //console.log(this);
  // }
  handleChange=(e)=>
  {
   this.setState({searchField:e.target.value})
   //console.log(this);
  }
  componentDidMount()
  {
     fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=>this.setState({monsters:users}));
  }
  render(){
    const {monsters, searchField}=this.state;
    const filteredMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
    <div className='App'>
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder='search monsters' handleChange={this.handleChange}/>
      <CardList monsters={filteredMonsters}/>
      
    </div>
  );
}
};


export default App;