/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-08 16:13:23
        Filename: Note.js
        Description: Created by SpringHack using vim automatically.
**/
import React from 'react';
import {observer} from 'mobx-react';
import {
    message, Modal, Tree, Switch, Button, Input, Row, Col
} from 'antd';
import {
    Panel
} from 'muicss';

import Config from '../config/Config.js';
import marked from '../config/marked.js';

let CodeMirror;

if (!process.env.NODE_SSR)
{
    require('codemirror/mode/markdown/markdown');
    CodeMirror = require('react-codemirror');
}

export default @observer class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes : {},
            origin : '',
            code : '',
            time : new Date().getTime()/1000,
            title : '',
            modal : false,
            public : 0,
            currentID : ''
        };
    }
    render() {
        let tree = this.convertNode(this.state.notes);
        return (
            <section className='Note'>
                <Panel className='Title'>
                    <h1>CoNote</h1>
                </Panel>
                <Panel className='Main'>
                    <div className='List'>
                        <Tree onSelect={(...r) => this.config(...r)} showLine>
                            {tree}
                        </Tree>
                    </div>
                    <div className='Edit'>
                        <Row className='Tool'>
                            <Col span={11}>
                                <Input type='text' value={this.state.title} addonBefore='笔记标题: ' placeholder='Title here' onChange={e => this.setState({title : e.target.value})} />
                            </Col>
                            <Col span={11}>
                                <Input type='text' disabled value={new Date(this.state.time*1000).toString()} addonBefore='创建时间: ' /> 
                            </Col>
                            <Col span={2}>
                                <Button style={{width : '100%'}} onClick={() => this.save()}>保存笔记</Button>
                            </Col>
                        </Row>
                        <div className='View' id='MarkdownView' dangerouslySetInnerHTML={{__html : marked(this.state.code)}}></div>
                        <div className='Editor'>
                            {
                                <CodeMirror
                                    className='CodeMirror'
                                    value={this.state.code}
                                    onChange={code => this.setState({code : code})}
                                    options={
                                        {
                                            lineNumbers : true,
                                            matchBrackets : true,
                                            styleActiveLine : true,
                                            mode : 'markdown',
                                            theme : 'solarized dark'
                                        }
                                    }
                                    preserveScrollPosition />
                            }
                        </div>
                    </div>
                </Panel>
                <Modal title='其他人对此笔记: ' visible={this.state.modal} onCancel={() => this.setState({modal : false})}footer='' className='Modal'>
                    <Row>
                        <Col span={8} className='S'>
                            <Switch checkedChildren={'可读开'} unCheckedChildren={'可读关'}
                                checked={this.state.public&4} onChange={i => this.setState({public : i?this.state.public|4:this.state.public&3})} />
                        </Col>
                        <Col span={8} className='S'>
                            <Switch checkedChildren={'修改开'} unCheckedChildren={'修改关'}
                                checked={this.state.public&2} onChange={i => this.setState({public : i?this.state.public|2:this.state.public&5})} />
                        </Col>
                        <Col span={8} className='S'>
                            <Switch checkedChildren={'删除开'} unCheckedChildren={'删除关'}
                                checked={this.state.public&1} onChange={i => this.setState({public : i?this.state.public|1:this.state.public&6})} />
                        </Col>
                    </Row>
                </Modal>
            </section>
        );
    }
    componentDidMount() {
        require('codemirror/theme/solarized.css');
        this.refreshNotes();
    }
    convertNode(notes) {
        let ids = Object.keys(this.state.notes);
        return ids.map((id, index) => {
            return (
                <Tree.TreeNode id={id} key={index} title={this.state.notes[id].title}>
                    <Tree.TreeNode id={id} title='Edit' />
                    <Tree.TreeNode id={id} title='Config' />
                    <Tree.TreeNode id={id} title='Delete' />
                </Tree.TreeNode>
            );
        });
    }
    save() {
        if (['code', 'title'].filter(x => this.state[x].trim() != '').length < 2)
        {
            message.error('不能留空!');
            return;
        }
        fetch(Config.getServer('/note'), Config.getFetch('POST', {
            title : this.state.title,
            content : this.state.code,
            id : this.state.currentID,
            public : this.state.public
        }))
        .then(res => res.json())
        .then(json => {
            json.error?message.error(json.error):message.success('保存成功!');
        })
        .catch(err => message.error(err));
    }
    config(selectedKeys, {node}) {
        let {title, id} = node.props;
        switch (title)
        {
            case 'Config':
                console.log('Properties:', id);
                this.setState({modal : true});
            break;
            case 'Delete':
                console.log('Delete', id);
                Modal.confirm({
                    title : `删除: ${this.state.notes[id].title}`,
                    content : '你确认删除这条笔记?',
                    onOk() {
                        //TODO: API required !!!
                        message.info('删除你麻痹接口在哪了!');
                    },
                    onCancel() {}
                });
            break;
            case 'Edit':
                console.log('Edit', id, this.state.currentI);
                if (this.state.currentID == id) return;
                fetch(Config.getServer(`/note/id/${id}`), Config.getFetch())
                .then(res => res.json())
                .then(json => {
                    json.error?message.error(json.error):message.success('载入笔记成功!');
                    if (!json.error)
                    {
                        this.setState({
                            title : json.note.title,
                            code : json.note.content,
                            public : json.note.public,
                            origin : json.note.content,
                            time : json.note.create_at,
                            currentID : id
                        });
                    }
                })
                .catch(error => message.error(error));
            break;
            dafault:
            break;
        }
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
}
