/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-01-28 02:14:32
        Filename: Register.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {observer} from 'mobx-react';
import {
    message,
    Input, Button, Card
} from 'antd';

import Config from '../config/Config.js';

export default @observer class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user : '',
            pass : '',
            paxx : '',
            email : '',
            verify : '',
            loading : false
        };
    }
    render() 
    {
        return (
            <Card className='Register' title={<h3>注册账户</h3>}>
                <Input type='text' onChange={e => this.setState({user : e.target.value})} addonBefore='账号' placeholder='username' />
                <Input type='password' onChange={e => this.setState({pass : e.target.value})} addonBefore='密码' placeholder='password' />
                <Input type='password' onChange={e => this.setState({paxx : e.target.value})} addonBefore='密码' placeholder='verify password' />
                <Input type='email' onChange={e => this.setState({email : e.target.value})} addonBefore='邮箱' placeholder='e-mail address' />
                <Input type='text' onChange={e => this.setState({verify : e.target.value})} addonBefore='验证' placeholder='verify code' />
                <Button loading={this.state.loading} onClick={e => this.doReg(e)}>注册</Button>
            </Card>
        );
    }
    doReg(e) {
        if (['user', 'pass', 'paxx', 'email', 'verify'].filter(key => this.state[key] != '').length != 5)
        {
            message.error('不能留空!');
            return;
        }
        if (this.state.pass != this.state.paxx)
        {
            message.error('两次输入密码不同!');
            return;
        }
        this.setState({loading: true});
        fetch(Config.getServer('/user'), {
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
            json.error?message.error(json.error):message.success('注册成功!');
            this.setState({loading : false});
        })
        .catch(err => {
            message.error(err);
            this.setState({loading : false});
        });
    }
}
