import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Question = (props) => {
    const {question, user} = props;
    return (
        <div className="question">
            <span className="question__header">{user.name} Ask</span>
            <div className="question__body">
                <div className="question__body__image">
                    <img src={user.avatarURL} alt={user.name}/>
                </div>
                <div className="question__body__poll">
                    <div className="question__poll">
                        <h1>Would you rather?</h1>
                        <p>... {question.optionOne.text}</p>
                        <p>... or</p>
                        {question.answered ? <Link className="answered" to={`/questions/${question.id}`}>View Result</Link> : <Link to={`/questions/${question.id}`}>Give a Vote</Link>}
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({users}, {question}) => {
    return {
        user: Object.values(users).filter(users => users.id === question.author)[0] || null,
        question
    };
};

const ConnectedQuestion = connect(mapStateToProps)(Question);

ConnectedQuestion.propTypes = {
    question: PropTypes.object.isRequired
};

export default ConnectedQuestion;
