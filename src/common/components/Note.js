/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-01 02:52:06
        Filename: src/common/components/Note.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {observer} from 'mobx-react';
import {
    message, Row, Col, Tree
} from 'antd';
import showdown from 'showdown';

import Config from '../config/Config.js';

showdown.setFlavor('github');
const converter = new showdown.Converter();

export default @observer class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes : {},
            code : '',
            codemirror : undefined
        };
    }
    render() 
    {
        let tree = this.convertNode(this.state.notes);
        return (
            <section className='Note'>
                <header>
                    <div className='Login'>
                        <h1>This is Minecraft</h1>
                    </div>
                </header>
                <Row className='Main'>
                    <Col span={4} className='List'>
                        {tree}
                    </Col>
                    <Col span={20} className='Edit'>
                        <Row>
                            <Col span={12}>
                                {this.state.codemirror}
                            </Col>
                            <Col span={12}>
                                <div id='MarkdownView' dangerouslySetInnerHTML={{__html : converter.makeHtml(this.state.code)}}>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>
        );
    }
    convertNode(notes) {
        return (
            <Tree classNmae='NoteTree' showLine>
            </Tree>
        );
    }
    initCodeMirror() {
        if (!process.env.NODE_SSR)
        {
            require('codemirror/mode/markdown/markdown');
            let CodeMirror = require('react-codemirror');
            this.setState({codemirror : (<CodeMirror value={this.state.code} onChange={code => this.setState({code : code})} options={{lineNumbers : true, mode : 'markdown'}} preserveScrollPosition />)});
        }
    }
    componentDidMount() {
        this.initCodeMirror();
        fetch(Config.getServer('/note'), Config.getFetch())
        .then(res => res.json())
        .then(json => {
            json.error?message.error(json.error):message.success('获取笔记成功!');
            json.error || this.setState({notes : json.notes})
        })
        .catch(err => message.error(err));
    }
}
