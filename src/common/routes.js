/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-01-31 13:07:41
        Filename: ../routes.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {IndexRoute, Router, Route} from 'react-router';
import {
    App, Check, Note
} from './components';

export default (
    <Route path='/'>
        <IndexRoute component={App} />
        <Route path='note' component={Check}>
            <IndexRoute component={Note} />
            <Route path='edit/:id' component={App} />
            <Route path='view/:id' component={App} />
        </Route>
    </Route>
);
