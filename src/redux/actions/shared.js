import {hideLoading, showLoading} from 'react-redux-loading';
import {getInitialData} from '../../utils/api';
import {receiveUsers} from './users';
import {receiveQuestions} from './questions';

const handleInitialData = () => dispatch => {
    dispatch(showLoading());
    return getInitialData()
        .then(({users, questions}) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(hideLoading());
        });
};

export {handleInitialData};
