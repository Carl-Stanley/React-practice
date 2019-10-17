import React, { Component } from 'react';
import './App.css';
import MyApp from './components/MyComponent';
import Message from './components/MessageComponent';
import Name from './components/NameComponent';
import ReactDom from "react-dom";

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

  handleInputChange = event => {

    console.log(event.target.value);

  }

  handleSingleClickEvent = () => alert('Single Click Event Triggered');


  handleDoubleClickEvent = () => alert('Double Click Event Triggered');
   
  handleMouseEnter  = () => alert('Mouse Enter');

  handleMouseLeave  = () => alert('Mouse Leave');

  render () {

  return (
    <div className="App">
     
      <header className="App-header">

      <MyApp />
      
      <h4>{this.state.message} My name is {this.state.name}</h4>  

      <Message propsMessage={this.state.message}/> 
      
      <Name propsName ={this.state.name}/>
      
      <input onChange={this.handleChangeFunction} />
      
      <button onClick={this.handleSingleClickEvent}>Single click</button>
      <button onDoubleClick={this.handleDoubleClickEvent}>Double Click</button>
      <div onMouseEnter={this.handleMouseEnter}>Mouse Enter</div>
      <div onMouseLeave={this.handleMouseLeave}>Mouse Leave</div> 
      <input type="text" placeholder="change me" onChange={this.handleInputChange}></input>
            

      </header>
     
      
      

    </div>
    )
  };
}

export default App;
