import React, {Component} from 'react';
import {connect} from 'react-redux';

const VoteBadge = () => {
    return (
        <div className="badge">
            <span>Yours!</span>
        </div>
    );
};

class QuestionResult extends Component {
    render() {
        const {currentUser, user, question} = this.props;
        const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
        const votesOnePercentage = (question.optionOne.votes.length / totalVotes) * 100;
        const votesTwoPercentage = (question.optionTwo.votes.length / totalVotes) * 100;
        const userVote = currentUser.answers[question.id];

        return (
            <div className="question-result">
                <span className="question-result__header">{user.name} Ask</span>
                <div className="question-result__body">
                    <div className="question-result__body__image">
                        <img src={user.avatarURL} alt={user.name}/>
                    </div>
                    <div className="question-result__body__result">
                        <span>Result</span>
                        <div className="question-result__container">
                            <div className="question-result__result">
                                {userVote === 'optionOne' && <VoteBadge/>}
                                <p>Would you rather be {question.optionOne.text}?</p>
                                <div className="question-result__indicator">
                                    <div className="question-result__indicator__fill"
                                         style={{width: votesOnePercentage + '%'}}/>
                                </div>
                                <p>{question.optionOne.votes.length} out of {totalVotes}</p>
                            </div>

                            <div className="question-result__result">
                                {userVote === 'optionTwo' && <VoteBadge/>}
                                <p>Would you rather be {question.optionTwo.text}?</p>
                                <div className="question-result__indicator">
                                    <div className="question-result__indicator__fill"
                                         style={{width: votesTwoPercentage + '%'}}/>
                                </div>
                                <p>{question.optionTwo.votes.length} out of {totalVotes}</p>
                            </div>
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
        currentUser: users[authedUser],
        question,
        user: users[question.author]

    };
};

const ConnectedQuestionResult = connect(mapStateToProps)(QuestionResult);

export default ConnectedQuestionResult;
