/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-01-27 14:21:37
        Filename: routes.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {IndexRoute, Router, Route} from 'react-router';
import {
    App, Login, Register
} from './components';

export default (
    <Route path='/'>
        <IndexRoute component={App} />
        <Route path='login' component={Login} />
        <Route path='register' component={Register} />
    </Route>
);
