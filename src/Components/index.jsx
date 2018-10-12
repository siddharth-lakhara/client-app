import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';

class Workspace extends Component {
  state = {
    userName: '',
    projectId: ''
  }

  login=(userName, projectId)=>{
    this.setState({
      userName, 
      projectId
    })
  }

  render() {
    const {login} = this;
    if (window.localStorage.login === 'true') {
      return (
        <Login />
      );
    }
    return (
        <Login login={login}/>
    );
  }
}

export default Workspace;
