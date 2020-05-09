import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleAddQuestion} from '../../../redux/actions/questions';
import {Redirect} from 'react-router-dom';

class QuestionInput extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    };

    onChangeHandler = event => {
        const text = event.target.value;
        if (event.target.id === 'optionOne') {
            this.setState(prev => ({
                ...prev,
                optionOne: text
            }));
            return;
        }

        this.setState(prev => ({
            ...prev,
            optionTwo: text
        }));
    };

    onSubmitHandler = event => {
        event.preventDefault();
        const {dispatch} = this.props;
        dispatch(handleAddQuestion(this.state.optionOne, this.state.optionTwo));
        this.setState(prev => ({
            ...prev,
            toHome: !prev.toHome
        }));

    };

    render() {
        if (this.state.toHome) {
            return (<Redirect to="/"/>);
        }
        return (
            <div className="question-input">
                <span className="question-input__header">Create a New Poll</span>
                <div className="question-input__body">
                    <p>Complete the question:</p>
                    <form onSubmit={this.onSubmitHandler}>
                        <p className="bold">Would you rather ...</p>
                        <input id="optionOne"
                               placeholder="Option one"
                               value={this.state.optionOne}
                               onChange={this.onChangeHandler}/>
                        <p className="bold">OR ...</p>
                        <input id="optionTwo"
                               placeholder="Option two"
                               value={this.state.optionTwo}
                               onChange={this.onChangeHandler}/>
                        <button disabled={!(this.state.optionTwo && this.state.optionOne)}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}


export default connect()(QuestionInput);
