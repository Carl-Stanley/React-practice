import React, { Component } from 'react';
import './App.css';
import MyApp from './components/MyComponent';
import Message from './components/MessageComponent';

class App extends Component {
  constructor () {
   super ();
   this.state = {
        message: "Hello From props",
        name: "carl"
   };

  }
  
  render () {

  return (
    <div className="App">
     
      <header className="App-header">

      <MyApp />
      <h1>{this.state.message} My name is {this.state.name}</h1>  

      <Message propsMessage={this.state.message} propsName ={this.state.name}/>
      </header>

      

    </div>
    )
  };
}

export default App;
