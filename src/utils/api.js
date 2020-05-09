import {_getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer} from './_DATA';

const getInitialData = () => {
    return Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then(([users, questions]) => ({
        users,
        questions
    }));
};

const saveQuestion = question => {
    console.log('jahdkajdsa', question);
    return _saveQuestion(question);
};

const saveQuestionAnswer = questionAnswer => {
    return _saveQuestionAnswer(questionAnswer);
};

export {getInitialData, saveQuestion, saveQuestionAnswer};
