import React from 'react';

import InputItems from './InputItems';
// import db from './database.json';
import './Login.css';

class Login extends React.Component {
    state = {
        userName: '',
        projectId: '',
    };

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }

    onSubmit = () => {
        const { userName, projectId } = this.state;
        if (projectId !== '' && userName !== '' ){
            this.props.login(userName, projectId);
        } else {
            alert("Enter userName and projectId");
        }
    }

    render() {
        const { userName, projectId } = this.state;
        const { onChange, onSubmit } = this;
        if (this.props.loggedIn === true) {
            return (
                <div className="login">
                    <div className="login-border">
                        You are already logged in!! <div className="login-goBack" onClick={() => { this.props.login(); }}>Go back</div>
                    </div>
                </div>
            );
        }

        return (
            <div className="login">
                <div className="login-border">
                    <div className="login-login">
                        LOGIN
                    </div>
                    <div className="login-inputItems">
                        <InputItems
                            name="userName"
                            value={userName}
                            title="User name"
                            type="text"
                            onChange={onChange}
                        />
                        <InputItems
                            name="projectId"
                            value={projectId}
                            title="projectId"
                            type="text"
                            onChange={onChange}
                        />
                        <button type="button" onClick={onSubmit} className="login-submit">Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
