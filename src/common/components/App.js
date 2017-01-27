/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-01-28 02:35:01
        Filename: App.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {observer} from 'mobx-react';

import Login from './Login.js';
import Register from './Register.js';

export default @observer class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() 
    {
        return (
            <div className='App'>
                <h1>CoNode - A free note 4 U</h1>
                <div className='User'>
                    <Login />
                    <div className='diver' />
                    <Register />
                </div>
                <h6>Design by SpringHack</h6>
            </div>
        );
    }
}
