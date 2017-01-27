/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-01-27 14:25:04
        Filename: Register.js
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
            pass : '',
            email : '',
            verify : ''
        };
    }
    render() 
    {
        return (
            <div>
                <Input type='text' onChange={e => this.setState({user : e.target.value})} addonBefore='账号' placeholder='username' />
                <Input type='password' onChange={e => this.setState({pass : e.target.value})} addonBefore='密码' placeholder='password' />
                <Input type='email' onChange={e => this.setState({email : e.target.value})} addonBefore='邮箱' placeholder='e-mail address' />
                <Input type='text' onChange={e => this.setState({verify : e.target.value})} addonBefore='验证' placeholder='verify code' />
                <Button onClick={e => this.doReg(e)}>注册</Button>
            </div>
        );
    }
    componentDidMount() {
        if (process.env.NODE_SSR)
            console.log('Server'); //Won't happend
        else
            console.log('Client');
    }
    doReg(e) {
    }
}
