import React, {Component} from 'react';
import {connect} from 'react-redux';
import Board from './Board';

class Boards extends Component {
    render() {
        const {leaderBoard} = this.props;
        return (
            <div className="boards">
                {
                    leaderBoard.map(board => (<Board key={board.id} board={board}/>))
                }
            </div>
        );
    }
}

const mapStateToProps = ({users}) => {
    return {
        leaderBoard: Object.values(users).map(user => (
            {
                id: user.id,
                name: user.name,
                avatarURL: user.avatarURL,
                answeredQuestion: Object.keys(user.answers).length || 0,
                createdQuestion: user.questions.length,
                totalScore: Object.keys(user.answers).length + user.questions.length
            }
        )).sort((a, b) => b.totalScore - a.totalScore)
    };
};

export default connect(mapStateToProps)(Boards);
