import React from 'react';
import PropTypes from 'prop-types';

const Board = props => {
    const {avatarURL, name, answeredQuestion, createdQuestion, totalScore} = props.board;
    return (
        <div className="board">
            <div className="board__image">
                <img src={avatarURL} alt={name}/>
            </div>
            <div className="board__info">
                <p className="board__info__name">{name}</p>
                <p>Answered Question: {answeredQuestion}</p>
                <p>Created Question: {createdQuestion}</p>
            </div>
            <div className="board__score">
                <span>{totalScore}</span>
            </div>
        </div>
    );
};

Board.propTypes = {
    board: PropTypes.object.isRequired
};

export default Board;
