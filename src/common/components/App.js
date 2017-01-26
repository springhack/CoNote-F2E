/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-01-26 13:18:01
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
                    <h1>CoNote</h1>
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
