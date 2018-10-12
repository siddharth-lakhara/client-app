import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Workspace from './Components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Workspace />
      </div>
    );
  }
}

export default App;
