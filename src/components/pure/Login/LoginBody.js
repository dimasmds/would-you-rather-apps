import LoginInput from './LoginInput';
import React, {Component} from 'react';

class LoginBody extends Component {
    state = {
        logo: '/images/logo.webp'
    };

    onUserChange = (user) => {
        this.setState(() => ({
            logo: user.avatarURL
        }));
    };

    render() {
        return (
            <div className="login__body">
                <div className="login__body__container">
                    <img className="login__body__logo" src={this.state.logo} alt="boy thinking"/>
                </div>
                <LoginInput
                    onUserChange={this.onUserChange}
                />
            </div>
        );
    }
}

export default LoginBody;
