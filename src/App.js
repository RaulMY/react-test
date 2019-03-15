import React, { Component } from 'react';
import UsersList from './components/usersList';
import MyForm from './components/form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <br></br>
        <MyForm></MyForm>
        <br></br>
        <UsersList></UsersList>
      </div>
    );
  }
}

export default App;
