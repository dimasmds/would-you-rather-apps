import React, {Component, Fragment} from 'react';
import Navigation from '../../pure/Navigation/Navigation';
import Boards from '../../pure/Board/Boards';

class LeaderBoard extends Component {
    render() {
        return (
            <Fragment>
                <Navigation activeMenu="leaderBoard"/>
                <Boards />
            </Fragment>
        );
    }
}

export default LeaderBoard;
