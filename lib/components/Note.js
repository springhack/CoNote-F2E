'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style4 = require('antd/lib/message/style');

var _message = require('antd/lib/message');

var _message2 = _interopRequireDefault(_message);

var _style5 = require('antd/lib/button/style');

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _style6 = require('antd/lib/tree/style');

var _tree = require('antd/lib/tree');

var _tree2 = _interopRequireDefault(_tree);

var _panel = require('muicss/lib/react/panel');

var _panel2 = _interopRequireDefault(_panel);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
                    Author: SpringHack - springhack@live.cn
                    Last modified: 2017-02-05 15:10:54
                    Filename: Note.js
                    Description: Created by SpringHack using vim automatically.
            **/


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _showdown = require('showdown');

var _showdown2 = _interopRequireDefault(_showdown);

var _Config = require('../config/Config.js');

var _Config2 = _interopRequireDefault(_Config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_showdown2.default.setFlavor('github');
var converter = new _showdown2.default.Converter();

exports.default = (0, _mobxReact.observer)(_class = function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        _this.state = {
            notes: {},
            code: '',
            codemirror: undefined
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
                            { showLine: true },
                            tree
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'Edit' },
                        _react2.default.createElement('div', { className: 'View', id: 'MarkdownView', dangerouslySetInnerHTML: { __html: converter.makeHtml(this.state.code) } }),
                        _react2.default.createElement(
                            'div',
                            { className: 'Editor' },
                            _react2.default.createElement(
                                'div',
                                { className: 'Tool' },
                                _react2.default.createElement(
                                    _button2.default,
                                    { onClick: function onClick() {
                                            return _this2.save();
                                        } },
                                    'Save'
                                )
                            ),
                            this.state.codemirror
                        )
                    )
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.initCodeMirror();
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
                    { key: index, title: _this3.state.notes[id].title },
                    _react2.default.createElement(_tree2.default.TreeNode, { title: 'Edit', onSelect: function onSelect() {
                            return _this3.edit(id);
                        } }),
                    _react2.default.createElement(_tree2.default.TreeNode, { title: 'Delete', onSelect: function onSelect() {
                            return _this3.delete(id);
                        } })
                );
            });
        }
    }, {
        key: 'save',
        value: function save() {
            fetch(_Config2.default.getServer('/note'), _Config2.default.getFetch('POST', {
                title: 'Test title',
                content: this.state.code,
                id: 'galigaygay',
                public: 0
            })).then(function (res) {
                return res.json();
            }).then(function (json) {
                json.error ? _message2.default.error(json.error) : _message2.default.success('保存成功!');
            }).catch(function (err) {
                return _message2.default.error(err);
            });
        }
    }, {
        key: 'edit',
        value: function edit(id) {
            console.log(this.state.notes[id].title);
        }
    }, {
        key: 'refreshNotes',
        value: function refreshNotes() {
            var _this4 = this;

            fetch(_Config2.default.getServer('/note'), _Config2.default.getFetch()).then(function (res) {
                return res.json();
            }).then(function (json) {
                json.error ? _message2.default.error(json.error) : _message2.default.success('获取笔记成功!');
                json.error || _this4.setState({ notes: json.notes });
            }).catch(function (err) {
                return _message2.default.error(err);
            });
        }
    }, {
        key: 'initCodeMirror',
        value: function initCodeMirror() {
            var _this5 = this;

            if (!process.env.NODE_SSR) {
                require('codemirror/mode/markdown/markdown');
                var CodeMirror = require('react-codemirror');
                this.setState({ codemirror: _react2.default.createElement(CodeMirror, { value: this.state.code, onChange: function onChange(code) {
                            return _this5.setState({ code: code });
                        }, options: { lineNumbers: true, mode: 'markdown' }, preserveScrollPosition: true }) });
            }
        }
    }]);

    return _class;
}(_react2.default.Component)) || _class;