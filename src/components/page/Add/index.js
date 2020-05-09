import React, {Component, Fragment} from 'react';
import Navigation from '../../pure/Navigation/Navigation';
import QuestionInput from '../../pure/Question/QuestionInput';

class NewPoll extends Component {
    render() {
        return (
            <Fragment>
                <Navigation activeMenu="newPoll"/>
                <QuestionInput />
            </Fragment>
        );
    }
}

export default NewPoll;
