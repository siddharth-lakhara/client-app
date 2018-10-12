import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Body from './Body/Body';

class Workspace extends Component {
  state = {
    userName: '',
    projectId: '',
  }

  login=(userName, projectId)=>{
    this.setState({
      userName, 
      projectId,
    });
    this.props.login();
  }

  render() {
    const {login} = this;
    const {userName, projectId} = this.state;
    if (this.props.loggedIn === true) {
      return (
        <Body userName={userName} projectId={projectId} />
      );
    }
    return (
        <Login login={login}/>
    );
  }
}

export default Workspace;
