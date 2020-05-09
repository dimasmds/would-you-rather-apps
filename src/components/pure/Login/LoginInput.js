import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setAuthedUser} from '../../../redux/actions/authed-user';
import PropTypes from 'prop-types';

class LoginInput extends Component {

    state = {
        user: null,
        toHome: false,
    };

    onSelectChangeHandler = event => {
        const {users, onUserChange} = this.props;
        const user = users.filter(user => user.id === event.target.value)[0];
        this.setState(() => ({user}));
        onUserChange(user);
    };

    onSubmitHandler = (event) => {
        const {dispatch} = this.props;
        event.preventDefault();
        dispatch(setAuthedUser(this.state.user.id));

        this.setState(prevState => ({
            user: prevState.user,
            toHome: !prevState.toHome
        }));
    };

    render() {
        const {users} = this.props;
        return (
            <div className="login__input">
                <h1>Sign in</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <select onChange={this.onSelectChangeHandler}
                            name="user"
                            required={true}
                            defaultValue="">
                        <option value=""
                                disabled={true}
                                hidden={true}>
                            Select users
                        </option>
                        {
                            users.map(user => (
                                <option key={user.id} value={user.id}>{user.name}</option>
                            ))
                        }
                    </select>
                    <button>Let's Go</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({users}, {onUserChange}) => {
    return {
        users: Object.values(users),
        onUserChange
    };
};

const ConnectedLoginInput = connect(mapStateToProps)(LoginInput);

ConnectedLoginInput.propTypes = {
    onUserChange: PropTypes.func.isRequired
};

export default ConnectedLoginInput;
