import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setAuthedUser} from '../../../redux/actions/authed-user';
import {Link} from 'react-router-dom';

class Navigation extends Component {

    onLogoutHandler = () => {
        const {dispatch} = this.props;
        dispatch(setAuthedUser(null));
    };

    render() {
        const {user, activeMenu} = this.props;
        return (
            <div className="navigation">
                <div className="navigation__top">
                    <div className="navigation__top__user">
                        <img src={user.avatarURL} alt={user.name}/>
                        <span>Hello, {user.name}</span>
                    </div>
                    <div className="navigation__top__logout">
                        <button onClick={this.onLogoutHandler}>Logout</button>
                    </div>
                </div>
                <div className="navigation__bottom">
                    <ul>
                        <li className={activeMenu === 'home' ? 'selected' : null}><Link to="/">Home</Link></li>
                        <li className={activeMenu === 'newPoll' ? 'selected' : null}><Link to="/add">New Poll</Link></li>
                        <li className={activeMenu === 'leaderBoard' ? 'selected' : null}><Link to="/leaderboard">Leader Board</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({authedUser, users}, {activeMenu}) => {
    return {
        user: Object.values(users).filter(user => user.id === authedUser)[0] || null,
        activeMenu
    };
};

const ConnectedNavigation = connect(mapStateToProps)(Navigation);

ConnectedNavigation.propTypes = {
    activeMenu: PropTypes.string.isRequired
};

export default ConnectedNavigation;
