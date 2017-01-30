/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-01-30 22:34:59
        Filename: Check.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {observer} from 'mobx-react';

import Config from '../config/Config.js';

export default @observer class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checking : true,
            logined : false
        };
    }
    render() {
        return (this.state.checking)?(<div>Loading...</div>):((this.state.logined)?(this.props.children):(<div>Please login</div>));
    }
    componentDidMount() {
        fetch(Config.getServer('/login'), {
            method : 'GET',
            mode : 'cors',
            credentials : 'include',
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => {
            json.error?this.setState({checking : false, logined : false}):this.setState({checking : false, logined : true});
        })
        .catch(err => {
            this.setState({checking : false, logined : false});
        });
    }
}
