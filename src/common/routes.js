/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-01-30 22:32:16
        Filename: routes.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {IndexRoute, Router, Route} from 'react-router';
import {
    App, Check
} from './components';

export default (
    <Route path='/'>
        <IndexRoute component={App} />
        <Route path='note' component={Check}>
            <IndexRoute component={App} />
        </Route>
    </Route>
);
