import React from 'react';
import Navigation from '../../pure/Navigation/Navigation';

const NotFound = () => {
    return (
        <div>
            <Navigation activeMenu=""/>
            <div className="not-found">
                <p className="not-found__title">Not Found :(</p>
                <p>Sorry, we are unable to process your request.</p>
            </div>
        </div>
    );
};

export default NotFound;
