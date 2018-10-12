import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { login, loggedIn } = this.props;

    return (
      <div className="header-main">
        <div className="logo-position">
          <div className="quick">QUICK</div>
          <div>
            {' '}
            <img className="app-icon" src={logo} alt="quickapp-logo" />
          </div>
          <div className="quick">APP</div>
        </div>
        <div className="signout" style={{ display: (loggedIn === true) ? '' : 'none' }} onClick={login}> Sign Out</div>
      </div>
    );
  }
}

export default Header;
