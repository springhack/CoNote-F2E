/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-01-29 23:48:55
        Filename: src/common/components/App.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {observer} from 'mobx-react';
import {
    Row, Col
} from 'antd';

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
            <Row className='App'>
                <h1>CoNode - A free note 4 U</h1>
                <Row className='User'>
                    <Col span={10} offset={1}>
                        <Login />
                    </Col>
                    <Col span={2}>
                        <div className='diver' />
                    </Col>
                    <Col span={10}>
                        <Register />
                    </Col>
                </Row>
                <h6>Design by SpringHack</h6>
            </Row>
        );
    }
}
