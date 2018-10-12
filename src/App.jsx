import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Workspace from './Components';
import './App.css';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-126966390-1');
ReactGA.pageview(window.location.pathname + window.location.search);


class App extends Component {
  state={
    loggedIn: false,
  }
  
  login = () =>{
    const {loggedIn} = this.state;
    this.setState({
      loggedIn: !loggedIn,
    })
  }
  render() {
    return (
      <div className="App">
        <Header loggedIn={this.state.loggedIn} login={this.login} />
        <Workspace loggedIn={this.state.loggedIn} login={this.login} />
      </div>
    );
  }
}

export default App;
