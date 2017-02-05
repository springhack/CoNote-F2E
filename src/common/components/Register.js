/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-05 15:09:44
        Filename: Register.js
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
            paxx : '',
            email : '',
            verify : '',
            loading : false
        };
    }
    render() 
    {
        return (
            <Card className='Register' title='注册账户'>
                <Input type='text' onChange={e => this.setState({user : e.target.value})} addonBefore='账号' placeholder='username' />
                <br />
                <Input type='password' onChange={e => this.setState({pass : e.target.value})} addonBefore='密码' placeholder='password' />
                <br />
                <Input type='password' onChange={e => this.setState({paxx : e.target.value})} addonBefore='密码' placeholder='verify password' />
                <br />
                <Input type='email' onChange={e => this.setState({email : e.target.value})} addonBefore='邮箱' placeholder='e-mail address' />
                <br />
                <Input type='text' onChange={e => this.setState({verify : e.target.value})} addonBefore='验证' placeholder='verify code' />
                <br />
                <Button loading={this.state.loading} onClick={e => this.doReg(e)}>注册</Button>
            </Card>
        );
    }
    doReg(e) {
        if (['user', 'pass', 'paxx', 'email', 'verify'].filter(key => this.state[key] != '').length != 5)
            return message.error('不能留空!');
        if (this.state.pass != this.state.paxx)
            return message.error('两次输入密码不同!');
        this.setState({loading: true});
        fetch(Config.getServer('/user'), Config.getFetch('POST', {
            username : this.state.user,
            password : this.state.pass,
            email : this.state.email,
            verify_code : this.state.verify
        }))
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
