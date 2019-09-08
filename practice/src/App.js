import React, { Component } from 'react';
import './App.css';
import MyApp from './components/MyComponent';
import Message from './components/MessageComponent';
import Name from './components/NameComponent';

class App extends Component {
  constructor () {
   super ();
   this.state = {
        message: "",
        name: "Gladiator"
   };

  }
  
  handleChangeFunction = event => {

    this.setState({message: event.target.value});

  };
  render () {

  return (
    <div className="App">
     
      <header className="App-header">

      <MyApp />
      
      <h4>{this.state.message} My name is {this.state.name}</h4>  

      <Message propsMessage={this.state.message}/> 
      
      <Name propsName ={this.state.name}/>
      
      <input onChange={this.handleChangeFunction} />

      </header>

      

    </div>
    )
  };
}

export default App;
