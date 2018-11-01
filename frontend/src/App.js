import React, { Component } from 'react';
import Users from './components/Users'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-header">Video Portal</h1>
        <Users></Users>
      </div>
    );
  }
}

export default App;
