import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {handleAddAnswerToUser} from '../../../redux/actions/users';
import {Redirect} from 'react-router-dom';

class QuestionVote extends Component {

    state = {
        option: null
    };

    onSubmitHandler = event => {
        event.preventDefault();
        const {id, dispatch} = this.props;
        dispatch(handleAddAnswerToUser(id, this.state.option));
    };

    onOptionChangeHandler = event => {
        this.setState({option: event.target.value});
    };

    render() {
        const {user, question} = this.props;
        if (!question) {
            return (<Redirect to="/404"/>);
        }
        return (
            <div className="question-vote">
                <span className="question-vote__header">{user.name} Ask</span>
                <div className="question-vote__body">
                    <div className="question-vote__body__image">
                        <img src={user.avatarURL} alt={user.name}/>
                    </div>
                    <div className="question-vote__body__poll">
                        <div className="question-vote__poll">
                            <h1>Would you rather?</h1>
                            <form onSubmit={this.onSubmitHandler}>
                                <input onChange={this.onOptionChangeHandler} id="optionOne" type="radio"
                                       value="optionOne" name="option"/>
                                <label htmlFor="optionOne">{question.optionOne.text}</label><br/>
                                <input onChange={this.onOptionChangeHandler} id="optionTwo" type="radio"
                                       value="optionTwo" name="option"/>
                                <label htmlFor="optionTwo">{question.optionTwo.text}</label><br/>
                                <button disabled={!this.state.option}>Vote!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({authedUser, questions, users}, {id}) => {
    const question = questions[id];
    return {
        authedUser,
        question,
        user: question ? users[question.author] : null
    };
};

const ConnectedQuestionVote = connect(mapStateToProps)(QuestionVote);

ConnectedQuestionVote.propTypes = {
    id: PropTypes.string.isRequired
};

export default ConnectedQuestionVote;
