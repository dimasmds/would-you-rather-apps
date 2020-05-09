import React, {Component, Fragment} from 'react';
import Navigation from '../../pure/Navigation/Navigation';
import {connect} from 'react-redux';
import QuestionResult from '../../pure/Question/QuestionResult';
import QuestionVote from '../../pure/Question/QuestionVote';

class DetailQuestion extends Component {
    render() {
        const {answered, id} = this.props;
        return (
            <Fragment>
                <Navigation activeMenu={''}/>
                <div className="detail">
                    {
                        answered ? (<QuestionResult id={id}/>) : (<QuestionVote id={id}/>)
                    }
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = ({authedUser, users}, props) => {
    const {id} = props.match.params;
    return {
        id,
        answered: Object.keys(users[authedUser].answers).includes(id)
    };
};

export default connect(mapStateToProps)(DetailQuestion);
