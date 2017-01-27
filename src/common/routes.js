/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-01-28 01:45:52
        Filename: ../routes.js
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
    </Route>
);
