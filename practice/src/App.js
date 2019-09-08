import React, { Component } from 'react';
import './App.css';
import MyApp from './components/MyComponent';
import MyApp2 from './components/MyComponent2';

class App extends Component {
  constructor () {
   super ();
   this.state = {
      name: "Carl"
   };

  }
  
  render () {

  return (
    <div className="App">
     
      <header className="App-header">

      <MyApp />
      <h1>{this.state.name}</h1>  

      <MyApp2 />
      </header>

      

    </div>
    )
  };
}

export default App;
