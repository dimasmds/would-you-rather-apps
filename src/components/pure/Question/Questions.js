import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';

const Questions = props => {
    const {questions} = props;
    return (
        <div className="questions">
            {
                questions.map(question => (<Question key={question.id} question={question}/>))
            }
        </div>
    );
};

Questions.propTypes = {
    questions: PropTypes.array.isRequired
};

export default Questions;
