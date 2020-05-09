import {hideLoading, showLoading} from 'react-redux-loading';
import {saveQuestion} from '../../utils/api';
import {addQuestionToUser} from './users';

const ACTION_TYPE = {
    RECEIVE_QUESTIONS: 'RECEIVE_QUESTIONS',
    ADD_QUESTION: 'ADD_QUESTION',
    ADD_USER_TO_OPTION: 'ADD_USER_TO_OPTION'
};

const receiveQuestions = questions => {
    return {
        type: ACTION_TYPE.RECEIVE_QUESTIONS,
        questions
    };
};

const addQuestion = (question) => {
    return {
        type: ACTION_TYPE.ADD_QUESTION,
        question
    };
};

const addUserToOption = (authedUser, qid, answer) => {
    return {
        type: ACTION_TYPE.ADD_USER_TO_OPTION,
        authedUser,
        qid,
        answer
    };
};

const handleAddQuestion = (optionOneText, optionTwoText) => (dispatch, getState) => {
    const {authedUser} = getState();
    dispatch(showLoading());
    return saveQuestion({optionOneText, optionTwoText, author: authedUser})
        .then(question => {
            dispatch(addQuestion(question));
            dispatch(addQuestionToUser(question));
        })
        .then(() => dispatch(hideLoading()));
};

export {ACTION_TYPE, receiveQuestions, addUserToOption, handleAddQuestion};
