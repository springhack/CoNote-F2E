/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-01-27 14:18:52
        Filename: Login.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {observer} from 'mobx-react';
import Config from '../config/Config.js';

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
    doLogin(e) {
        fetch(Config.getServer('/user'), {
            method : 'POST',
            mode : 'cors',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                user : this.state.user,
                pass : this.state.pass
            })
        })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
    }
    doReset(e) {
        this.setState({
            user : '',
            pass : ''
        });
    }
}
