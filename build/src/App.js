import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';






function App() {
  
  var thetoken = '';

  axios({
    method: 'post',
    url: 'https://corporate-event-planner-webeu.herokuapp.com/api/auth/login',
    data: {
      "email": "collette@test.com",
      "password": "123456"
    }
  })
  .then(function (response) {
    
    thetoken = response.data.token;
    console.log(response);
    console.log('The Token 1' + thetoken);
  })
  .catch(function (error) {
    console.log(error);
  });
/*
  axios({
    method: 'get',
    url: 'https://corporate-event-planner-webeu.herokuapp.com/api/events',
    headers: {
      Authorization: "1eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo0LCJlbWFpbCI6ImNvbGxldHRlQHRlc3QuY29tIiwiaWF0IjoxNTcxNjkzMTM4LCJleHAiOjE1NzE2OTY3Mzh9.C2F-3k6cvmu1Ytt28yJ3meY86TSBjEqsXQSddHFIPIw",       
    },
  })
  .then(function (response) {
    console.log(response);
    console.log();
  })
  .catch(function (error) {
    console.log(error);
  });
*/
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
