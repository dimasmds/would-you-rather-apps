import React, {Component} from 'react';
import {connect} from 'react-redux';
import Questions from '../Question/Questions';

const TAB = {
    AVAILABLE: 'available',
    ANSWERED: 'answered'
};

class Tab extends Component {

    state = {
        activeTab: TAB.AVAILABLE
    };

    onTabClicked = (event) => {
        this.setState({activeTab: event.target.id});
    };

    render() {
        const {activeTab} = this.state;
        const {answeredQuestions, availableQuestions} = this.props;

        return (
            <div className="tab">
                <div className="tab__header">
                    <button id={TAB.AVAILABLE}
                            onClick={this.onTabClicked}
                            className={activeTab === TAB.AVAILABLE ? 'selected' : null}>
                        Available Questions
                    </button>
                    <button id={TAB.ANSWERED}
                            onClick={this.onTabClicked}
                            className={activeTab === TAB.ANSWERED ? 'selected' : null}>
                        Answered Questions
                    </button>
                </div>
                <div className="tab__body">
                    {
                        activeTab === TAB.AVAILABLE ? <Questions questions={availableQuestions}/> :
                            <Questions questions={answeredQuestions} answered={true}/>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({authedUser, users, questions}) => {
    const answers = Object.keys(users[authedUser].answers);
    return {
        answeredQuestions: Object.values(questions).filter(question => answers.includes(question.id)).map(filteredQuestion => ({
            ...filteredQuestion,
            answered: true
        })).sort((a, b) => b.timestamp - a.timestamp),
        availableQuestions: Object.values(questions).filter(questions => !answers.includes(questions.id)).map(filteredQuestion => ({
            ...filteredQuestion,
            answered: false
        })).sort((a, b) => b.timestamp - a.timestamp)
    };
};

export default connect(mapStateToProps)(Tab);

