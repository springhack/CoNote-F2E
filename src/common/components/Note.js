/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-05 15:10:54
        Filename: Note.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {observer} from 'mobx-react';
import {
    message, Tree, Button
} from 'antd';
import {
    Panel, Row, Col
} from 'muicss';
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
                <Panel className='Title'>
                    <h1>CoNote</h1>
                </Panel>
                <Panel className='Main'>
                    <div className='List'>
                        <Tree showLine>
                            {tree}
                        </Tree>
                    </div>
                    <div className='Edit'>
                        <div className='View' id='MarkdownView' dangerouslySetInnerHTML={{__html : converter.makeHtml(this.state.code)}}></div>
                        <div className='Editor'>
                            <div className='Tool'>
                                <Button onClick={() => this.save()}>Save</Button>
                            </div>
                            {this.state.codemirror}
                        </div>
                    </div>
                </Panel>
            </section>
        );
    }
    componentDidMount() {
        this.initCodeMirror();
        this.refreshNotes();
    }
    convertNode(notes) {
        let ids = Object.keys(this.state.notes);
        return ids.map((id, index) => {
            return (
                <Tree.TreeNode key={index} title={this.state.notes[id].title}>
                    <Tree.TreeNode title='Edit' onSelect={() => this.edit(id)} />
                    <Tree.TreeNode title='Delete' onSelect={() => this.delete(id)} />
                </Tree.TreeNode>
            );
        });
    }
    save() {
        fetch(Config.getServer('/note'), Config.getFetch('POST', {
            title : 'Test title',
            content : this.state.code,
            id : 'galigaygay',
            public : 0
        }))
        .then(res => res.json())
        .then(json => {
            json.error?message.error(json.error):message.success('保存成功!');
        })
        .catch(err => message.error(err));
    }
    edit(id) {
        console.log(this.state.notes[id].title);
    }
    refreshNotes() {
        fetch(Config.getServer('/note'), Config.getFetch())
        .then(res => res.json())
        .then(json => {
            json.error?message.error(json.error):message.success('获取笔记成功!');
            json.error || this.setState({notes : json.notes})
        })
        .catch(err => message.error(err));
    }
    initCodeMirror() {
        if (!process.env.NODE_SSR)
        {
            require('codemirror/mode/markdown/markdown');
            let CodeMirror = require('react-codemirror');
            this.setState({codemirror : (<CodeMirror value={this.state.code} onChange={code => this.setState({code : code})} options={{lineNumbers : true, mode : 'markdown'}} preserveScrollPosition />)});
        }
    }
}
