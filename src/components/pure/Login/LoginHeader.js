import PropTypes from 'prop-types';
import React from 'react';

const LoginHeader = (props) => {
    const {title, subTitle} = props;
    return (
        <div className="login__header">
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </div>
    );
};

LoginHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
};

export default LoginHeader;
