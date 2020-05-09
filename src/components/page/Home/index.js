import React, {Component, Fragment} from 'react';
import Navigation from '../../pure/Navigation/Navigation';
import Tab from '../../pure/Tab/Tab';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Navigation activeMenu="home"/>
                <Tab/>
            </Fragment>
        );
    }
}

export default Home;
