import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {handleInitialData} from '../../redux/actions/shared';
import LoadingBar from 'react-redux-loading';
import Login from '../page/Login';
import Home from '../page/Home';
import NewPoll from '../page/Add';
import LeaderBoard from '../page/LeaderBoard';
import DetailQuestion from '../page/Detail';
import NotFound from '../page/NotFound';

class App extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(handleInitialData());
    }

    render() {
        const {authedUser} = this.props;
        return (
            <Router>
                <Fragment>
                    <LoadingBar/>
                    {
                        this.props.loading ? null :
                            authedUser === null ? (
                                <Login/>
                            ) : (
                                <Switch>
                                    <Route path="/" exact component={Home}/>
                                    <Route path="/add" exact component={NewPoll}/>
                                    <Route path="/leaderboard" exact component={LeaderBoard}/>
                                    <Route path="/questions/:id" component={DetailQuestion}/>
                                    <Route path="/404" component={NotFound}/>
                                    <Redirect to="/404" />
                                </Switch>
                            )
                    }
                </Fragment>
            </Router>
        );
    }
}

const mapStateToProps = ({users, questions, authedUser}) => {
    return {
        loading: !(Object.keys(questions).length && Object.keys(users).length),
        authedUser
    };
};

export default connect(mapStateToProps)(App);
