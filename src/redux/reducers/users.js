import {ACTION_TYPE} from '../actions/users';

const users = (state = {}, action) => {
    switch (action.type) {
        case ACTION_TYPE.RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            };
        case ACTION_TYPE.ADD_ANSWER_TO_USER:
            const {authedUser, qid, answer} = action;
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            };
        case ACTION_TYPE.ADD_QUESTION_TO_USER:
            const {author, id} = action;
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: [...state[author].questions, id]
                }
            };

        default:
            return state;
    }
};

export default users;
