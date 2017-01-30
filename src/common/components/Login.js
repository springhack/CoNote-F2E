/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-01-30 22:30:42
        Filename: Login.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {observer} from 'mobx-react';
import {
    message, Input, Button, Card
} from 'antd';

import Config from '../config/Config.js';

export default @observer class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user : '',
            pass : '',
            loading : false
        };
    }
    render() 
    {
        return (
            <Card className='Login' title={<h3>登录账户</h3>}>
                <Input type='text' value={this.state.user} onChange={e => this.setState({user : e.target.value})} placeholder='username' addonBefore='账号' />
                <br />
                <Input type='password' value={this.state.pass} onChange={e => this.setState({pass : e.target.value})} placeholder='password' addonBefore='密码' />
                <br />
                <Button loading={this.state.loading} onClick={e => this.doLogin(e)} style={{marginRight : '20px'}}>登录</Button>
                <Button onClick={e => this.doReset(e)}>重置</Button>
            </Card>
        );
    }
    doLogin(e) {
        if (['user', 'pass'].filter(key => this.state[key] != '').length != 2)
            return message.error('不能留空!');
        this.setState({loading: true});
        fetch(Config.getServer('/login'), {
            method : 'POST',
            mode : 'cors',
            credentials : 'include',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                username : this.state.user,
                password : this.state.pass
            })
        })
        .then(res => res.json())
        .then(json => {
            json.error?message.error(json.error):message.success('登录成功!');
            this.setState({loading : false});
            json.error || setTimeout(() => document.location.href = '/notes', 2000);
        })
        .catch(err => {
            message.error(err);
            this.setState({loading : false});
        });
    }
    doReset(e) {
        this.setState({
            user : '',
            pass : ''
        });
    }
}
