import React from 'react';
import './App.css';
import UserForm from './components/UserForm'


const axios = require('axios')
class App extends React.Component {
  getUser = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value; 
    let buzz = axios.get('http://jsonplaceholder.typicode.com/users?username='+ username)
    console.log(buzz)
  };
  

  

 render (){
    return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-Title">HTTP Request in React</h1>

      </header>
      <UserForm getUser={this.getUser}  />
    </div>
  );
    }
  }

export default App;
