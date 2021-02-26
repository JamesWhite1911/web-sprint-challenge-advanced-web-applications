import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
    return <Route
        {...rest}
        render={() => {
            if (localStorage.getItem('token')) {
                return <Component />
            } else {
                return <Redirect to="/login" /> //redirect to log in page if we don't have a token
            }
        }} />
}

export default PrivateRoute;