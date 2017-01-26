/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-01-27 00:37:39
        Filename: src/common/components/Login.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {observer} from 'mobx-react';

import {
    Input, Button
} from 'antd';

export default @observer class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user : '',
            pass : ''
        };
    }
    render() 
    {
        return (
            <div>
                <Input type='text' value={this.state.user} onChange={e => this.setState({user : e.target.value})} placeholder='username' addonBefore='账号' />
                <Input type='password' value={this.state.pass} onChange={e => this.setState({pass : e.target.value})} placeholder='password' addonBefore='密码' />
                <Button onClick={e => this.doLogin(e)}>登录</Button>
                <Button onClick={e => this.doReset(e)}>重置</Button>
            </div>
        );
    }
    componentDidMount() {
        if (process.env.NODE_SSR)
            console.log('Server'); //Won't happend
        else
            console.log('Client');
    }
    doLogin(e) {
    }
    doReset(e) {
        this.setState({
            user : '',
            pass : ''
        });
    }
}
