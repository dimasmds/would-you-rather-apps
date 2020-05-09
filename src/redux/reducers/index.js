import {loadingBarReducer} from 'react-redux-loading';
import authedUser from './authed-user';
import questions from './questions';
import users from './users';
import {combineReducers} from 'redux';

export default combineReducers({
    authedUser,
    questions,
    users,
    loadingBar: loadingBarReducer
});
