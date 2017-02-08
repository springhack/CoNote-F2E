/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-08 16:12:39
        Filename: App.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {observer} from 'mobx-react';
import {
    Container, Panel, Appbar, Row, Col
} from 'muicss';

import Login from './Login.js';
import Register from './Register.js';

export default @observer class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Container className='App'>
                <Panel className='Title'>
                    <h1>CoNote - A free note 4 U</h1>
                </Panel>
                <Panel className='User'>
                    <Row>
                        <Col md={6}>
                            <Login />
                        </Col>
                        <Col md={6}>
                            <Register />
                        </Col>
                    </Row>
                </Panel>
                <h6>Design by SpringHack</h6>
            </Container>
        );
    }
}
