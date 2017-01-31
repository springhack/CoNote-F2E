'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style5 = require('antd/lib/message/style');

var _message = require('antd/lib/message');

var _message2 = _interopRequireDefault(_message);

var _style6 = require('antd/lib/card/style');

var _card = require('antd/lib/card');

var _card2 = _interopRequireDefault(_card);

var _style7 = require('antd/lib/button/style');

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _style8 = require('antd/lib/input/style');

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
                    Author: SpringHack - springhack@live.cn
                    Last modified: 2017-01-31 13:23:28
                    Filename: Login.js
                    Description: Created by SpringHack using vim automatically.
            **/


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _Config = require('../config/Config.js');

var _Config2 = _interopRequireDefault(_Config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = (0, _mobxReact.observer)(_class = function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        _this.state = {
            user: '',
            pass: '',
            loading: false
        };
        return _this;
    }

    _createClass(_class, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _card2.default,
                { className: 'Login', title: _react2.default.createElement(
                        'h3',
                        null,
                        '\u767B\u5F55\u8D26\u6237'
                    ) },
                _react2.default.createElement(_input2.default, { type: 'text', value: this.state.user, onChange: function onChange(e) {
                        return _this2.setState({ user: e.target.value });
                    }, placeholder: 'username', addonBefore: '\u8D26\u53F7' }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(_input2.default, { type: 'password', value: this.state.pass, onChange: function onChange(e) {
                        return _this2.setState({ pass: e.target.value });
                    }, placeholder: 'password', addonBefore: '\u5BC6\u7801' }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    _button2.default,
                    { loading: this.state.loading, onClick: function onClick(e) {
                            return _this2.doLogin(e);
                        }, style: { marginRight: '20px' } },
                    '\u767B\u5F55'
                ),
                _react2.default.createElement(
                    _button2.default,
                    { onClick: function onClick(e) {
                            return _this2.doReset(e);
                        } },
                    '\u91CD\u7F6E'
                )
            );
        }
    }, {
        key: 'doLogin',
        value: function doLogin(e) {
            var _this3 = this;

            if (['user', 'pass'].filter(function (key) {
                return _this3.state[key] != '';
            }).length != 2) return _message2.default.error('不能留空!');
            this.setState({ loading: true });
            fetch(_Config2.default.getServer('/login'), _Config2.default.getFetch('POST', {
                username: this.state.user,
                password: this.state.pass
            })).then(function (res) {
                return res.json();
            }).then(function (json) {
                json.error ? _message2.default.error(json.error) : _message2.default.success('登录成功!');
                _this3.setState({ loading: false });
                json.error || setTimeout(function () {
                    return document.location.href = '/note';
                }, 2000);
            }).catch(function (err) {
                _message2.default.error(err);
                _this3.setState({ loading: false });
            });
        }
    }, {
        key: 'doReset',
        value: function doReset(e) {
            this.setState({
                user: '',
                pass: ''
            });
        }
    }]);

    return _class;
}(_react2.default.Component)) || _class;

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/common/components/Login.js');
}();

;