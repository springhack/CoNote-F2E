'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style9 = require('antd/lib/message/style');

var _message = require('antd/lib/message');

var _message2 = _interopRequireDefault(_message);

var _style10 = require('antd/lib/modal/style');

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _style11 = require('antd/lib/switch/style');

var _switch = require('antd/lib/switch');

var _switch2 = _interopRequireDefault(_switch);

var _style12 = require('antd/lib/row/style');

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

var _style13 = require('antd/lib/button/style');

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _style14 = require('antd/lib/col/style');

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

var _style15 = require('antd/lib/input/style');

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _style16 = require('antd/lib/tree/style');

var _tree = require('antd/lib/tree');

var _tree2 = _interopRequireDefault(_tree);

var _panel = require('muicss/lib/react/panel');

var _panel2 = _interopRequireDefault(_panel);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
                    Author: SpringHack - springhack@live.cn
                    Last modified: 2017-02-07 00:21:49
                    Filename: src/common/components/Note.js
                    Description: Created by SpringHack using vim automatically.
            **/


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _Config = require('../config/Config.js');

var _Config2 = _interopRequireDefault(_Config);

var _marked = require('../config/marked.js');

var _marked2 = _interopRequireDefault(_marked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CodeMirror = void 0;

if (!process.env.NODE_SSR) {
    require('codemirror/mode/markdown/markdown');
    CodeMirror = require('react-codemirror');
}

exports.default = (0, _mobxReact.observer)(_class = function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        _this.state = {
            notes: {},
            origin: '',
            code: '',
            time: new Date().getTime() / 1000,
            title: '',
            modal: false,
            public: 0,
            currentID: ''
        };
        return _this;
    }

    _createClass(_class, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var tree = this.convertNode(this.state.notes);
            return _react2.default.createElement(
                'section',
                { className: 'Note' },
                _react2.default.createElement(
                    _panel2.default,
                    { className: 'Title' },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'CoNote'
                    )
                ),
                _react2.default.createElement(
                    _panel2.default,
                    { className: 'Main' },
                    _react2.default.createElement(
                        'div',
                        { className: 'List' },
                        _react2.default.createElement(
                            _tree2.default,
                            { onSelect: function onSelect() {
                                    return _this2.config.apply(_this2, arguments);
                                }, showLine: true },
                            tree
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'Edit' },
                        _react2.default.createElement(
                            _row2.default,
                            { className: 'Tool' },
                            _react2.default.createElement(
                                _col2.default,
                                { span: 11 },
                                _react2.default.createElement(_input2.default, { type: 'text', value: this.state.title, addonBefore: '\u7B14\u8BB0\u6807\u9898: ', placeholder: 'Title here', onChange: function onChange(e) {
                                        return _this2.setState({ title: e.target.value });
                                    } })
                            ),
                            _react2.default.createElement(
                                _col2.default,
                                { span: 11 },
                                _react2.default.createElement(_input2.default, { type: 'text', disabled: true, value: new Date(this.state.time * 1000).toString(), addonBefore: '\u521B\u5EFA\u65F6\u95F4: ' })
                            ),
                            _react2.default.createElement(
                                _col2.default,
                                { span: 2 },
                                _react2.default.createElement(
                                    _button2.default,
                                    { style: { width: '100%' }, onClick: function onClick() {
                                            return _this2.save();
                                        } },
                                    '\u4FDD\u5B58\u7B14\u8BB0'
                                )
                            )
                        ),
                        _react2.default.createElement('div', { className: 'View', id: 'MarkdownView', dangerouslySetInnerHTML: { __html: (0, _marked2.default)(this.state.code) } }),
                        _react2.default.createElement(
                            'div',
                            { className: 'Editor' },
                            _react2.default.createElement(CodeMirror, {
                                className: 'CodeMirror',
                                value: this.state.code,
                                onChange: function onChange(code) {
                                    return _this2.setState({ code: code });
                                },
                                options: {
                                    lineNumbers: true,
                                    matchBrackets: true,
                                    styleActiveLine: true,
                                    mode: 'markdown',
                                    theme: 'solarized dark'
                                },
                                preserveScrollPosition: true })
                        )
                    )
                ),
                _react2.default.createElement(
                    _modal2.default,
                    { title: '\u5176\u4ED6\u4EBA\u5BF9\u6B64\u7B14\u8BB0: ', visible: this.state.modal, onCancel: function onCancel() {
                            return _this2.setState({ modal: false });
                        }, footer: '', className: 'Modal' },
                    _react2.default.createElement(
                        _row2.default,
                        null,
                        _react2.default.createElement(
                            _col2.default,
                            { span: 8, className: 'S' },
                            _react2.default.createElement(_switch2.default, { checkedChildren: '可读开', unCheckedChildren: '可读关',
                                checked: this.state.public & 4, onChange: function onChange(i) {
                                    return _this2.setState({ public: i ? _this2.state.public | 4 : _this2.state.public & 3 });
                                } })
                        ),
                        _react2.default.createElement(
                            _col2.default,
                            { span: 8, className: 'S' },
                            _react2.default.createElement(_switch2.default, { checkedChildren: '修改开', unCheckedChildren: '修改关',
                                checked: this.state.public & 2, onChange: function onChange(i) {
                                    return _this2.setState({ public: i ? _this2.state.public | 2 : _this2.state.public & 5 });
                                } })
                        ),
                        _react2.default.createElement(
                            _col2.default,
                            { span: 8, className: 'S' },
                            _react2.default.createElement(_switch2.default, { checkedChildren: '删除开', unCheckedChildren: '删除关',
                                checked: this.state.public & 1, onChange: function onChange(i) {
                                    return _this2.setState({ public: i ? _this2.state.public | 1 : _this2.state.public & 6 });
                                } })
                        )
                    )
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            require('codemirror/theme/solarized.css');
            this.refreshNotes();
        }
    }, {
        key: 'convertNode',
        value: function convertNode(notes) {
            var _this3 = this;

            var ids = Object.keys(this.state.notes);
            return ids.map(function (id, index) {
                return _react2.default.createElement(
                    _tree2.default.TreeNode,
                    { id: id, key: index, title: _this3.state.notes[id].title },
                    _react2.default.createElement(_tree2.default.TreeNode, { id: id, title: 'Edit' }),
                    _react2.default.createElement(_tree2.default.TreeNode, { id: id, title: 'Config' }),
                    _react2.default.createElement(_tree2.default.TreeNode, { id: id, title: 'Delete' })
                );
            });
        }
    }, {
        key: 'save',
        value: function save() {
            var _this4 = this;

            if (['code', 'title'].filter(function (x) {
                return _this4.state[x].trim() != '';
            }).length < 2) {
                _message2.default.error('不能留空!');
                return;
            }
            fetch(_Config2.default.getServer('/note'), _Config2.default.getFetch('POST', {
                title: this.state.title,
                content: this.state.code,
                id: this.state.currentID,
                public: this.state.public
            })).then(function (res) {
                return res.json();
            }).then(function (json) {
                json.error ? _message2.default.error(json.error) : _message2.default.success('保存成功!');
            }).catch(function (err) {
                return _message2.default.error(err);
            });
        }
    }, {
        key: 'config',
        value: function config(selectedKeys, _ref) {
            var _this5 = this;

            var node = _ref.node;
            var _node$props = node.props,
                title = _node$props.title,
                id = _node$props.id;

            switch (title) {
                case 'Config':
                    console.log('Properties:', id);
                    this.setState({ modal: true });
                    break;
                case 'Delete':
                    console.log('Delete', id);
                    _modal2.default.confirm({
                        title: '\u5220\u9664: ' + this.state.notes[id].title,
                        content: '你确认删除这条笔记?',
                        onOk: function onOk() {
                            //TODO: API required !!!
                            _message2.default.info('删除你麻痹接口在哪了!');
                        },
                        onCancel: function onCancel() {}
                    });
                    break;
                case 'Edit':
                    console.log('Edit', id, this.state.currentI);
                    if (this.state.currentID == id) return;
                    fetch(_Config2.default.getServer('/note/id/' + id), _Config2.default.getFetch()).then(function (res) {
                        return res.json();
                    }).then(function (json) {
                        json.error ? _message2.default.error(json.error) : _message2.default.success('载入笔记成功!');
                        if (!json.error) {
                            _this5.setState({
                                title: json.note.title,
                                code: json.note.content,
                                public: json.note.public,
                                origin: json.note.content,
                                time: json.note.create_at,
                                currentID: id
                            });
                        }
                    }).catch(function (error) {
                        return _message2.default.error(error);
                    });
                    break;
                    dafault: break;
            }
        }
    }, {
        key: 'refreshNotes',
        value: function refreshNotes() {
            var _this6 = this;

            fetch(_Config2.default.getServer('/note'), _Config2.default.getFetch()).then(function (res) {
                return res.json();
            }).then(function (json) {
                json.error ? _message2.default.error(json.error) : _message2.default.success('获取笔记成功!');
                json.error || _this6.setState({ notes: json.notes });
            }).catch(function (err) {
                return _message2.default.error(err);
            });
        }
    }]);

    return _class;
}(_react2.default.Component)) || _class;