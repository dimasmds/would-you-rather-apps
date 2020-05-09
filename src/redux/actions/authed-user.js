const ACTION_TYPE = {
    SET_AUTHED_USER: 'SET_AUTHED_USER'
};

const setAuthedUser = (id) => {
    return {
        type: ACTION_TYPE.SET_AUTHED_USER,
        id
    };
};

export {ACTION_TYPE, setAuthedUser};
