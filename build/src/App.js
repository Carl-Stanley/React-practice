import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import {axiosWithAuth} from "./axiosWithAuth";

 



function App() {
   
  
  axiosWithAuth()
			
			.get("/api/events")
			.then(res => {
				console.log(res);
				
			})
			.catch(error => {
				console.log(error);
			});
  //axios({
  //  method: 'post',
   // url: '/api/auth/login',
   // data: {
    //  "email": "collette@test.com",
     // "password": "123456"
   // }
  //})
  //.then(function (response) {
   // 
   // thetoken = response.data.token;
   // console.log(thetoken);
  //})
  //.catch(function (error) {
    //console.log(error);
  //});
 

  //axios({
   // method: 'get',
   // url: 'https://corporate-event-planner-webeu.herokuapp.com/api/events',
    //headers: {
     // 'Authorization': token,
    //  'Content-Type': 'application/json'
   //},
  //})
  //.then(function (response) {
   // console.log(response);
    //})
  //.catch(function (error) {
   // console.log(error);
    //console.log(`${thetoken}`);
  //});
 
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
