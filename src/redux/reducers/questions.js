import {ACTION_TYPE} from '../actions/questions';

const questions = (state = {}, action) => {
    switch (action.type) {
        case ACTION_TYPE.RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };

        case ACTION_TYPE.ADD_QUESTION:
            const {id} = action.question;
            return {
                ...state,
                [id]: action.question
            };

        case ACTION_TYPE.ADD_USER_TO_OPTION:
            const {authedUser, qid, answer} = action;

            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: [...state[qid][answer].votes, authedUser]
                    }
                }
            };

        default:
            return state;
    }
};

export default questions;
