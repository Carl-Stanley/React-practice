import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';






function App() {

  axios({
    method: 'post',
    url: 'https://corporate-event-planner-webeu.herokuapp.com/api/auth/login',
    data: {
      "email": "collette@test.com",
      "password": "123456"
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
