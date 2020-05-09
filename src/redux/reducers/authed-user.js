import {ACTION_TYPE} from '../actions/authed-user';

const authedUser = (state = null, action) => {
    if (action.type === ACTION_TYPE.SET_AUTHED_USER) {
        return action.id;
    } else {
        return state;
    }
};

export default authedUser;
