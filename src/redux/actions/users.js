import {hideLoading, showLoading} from 'react-redux-loading';
import {saveQuestionAnswer} from '../../utils/api';
import {addUserToOption} from './questions';

const ACTION_TYPE = {
    RECEIVE_USERS: 'RECEIVE_USER',
    ADD_ANSWER_TO_USER: 'ADD_ANSWER_TO_USER',
    ADD_QUESTION_TO_USER: 'ADD_QUESTION_TO_USER'
};

const receiveUsers = users => {
    return {
        type: ACTION_TYPE.RECEIVE_USERS,
        users
    };
};

const addAnswerToUser = (authedUser, qid, answer) => {
    return {
        type: ACTION_TYPE.ADD_ANSWER_TO_USER,
        authedUser,
        qid,
        answer
    };
};

const addQuestionToUser = ({author, id}) => {
    return {
        type: ACTION_TYPE.ADD_QUESTION_TO_USER,
        author,
        id
    };
};

const handleAddAnswerToUser = (qid, answer) => (dispatch, getstate) => {
    const {authedUser} = getstate();
    dispatch(showLoading());
    return saveQuestionAnswer({authedUser, qid, answer})
        .then(() => {
            dispatch(addAnswerToUser(authedUser, qid, answer));
            dispatch(addUserToOption(authedUser, qid, answer));
        })
        .then(() => dispatch(hideLoading()));
};

export {ACTION_TYPE, receiveUsers, addQuestionToUser, handleAddAnswerToUser};
