/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-01-27 19:08:26
        Filename: src/common/components/App.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {observer} from 'mobx-react';

export default @observer class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() 
    {
        return (
            <div>
                <header>
                    <h1>CoNote - Free note 4 U :)</h1>
                    <section>
                        <a to='/login'>登录</a>
                        <a to='/register'>注册</a>
                    </section>
                </header>
                <article></article>
                <footer></footer>
            </div>
        );
    }
    componentDidMount() {
        if (process.env.NODE_SSR)
            console.log('Server'); //Won't happend
        else
            console.log('Client');
    }
}
