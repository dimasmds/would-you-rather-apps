import React, {Component} from 'react';
import LoginHeader from '../../pure/Login/LoginHeader';
import LoginBody from '../../pure/Login/LoginBody';

class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="login__container">
                    <LoginHeader
                        title="Welcome to the Would Rather App!"
                        subTitle="Please sign to continue"/>
                    <LoginBody/>
                </div>
            </div>
        );
    }
}

export default Login;
