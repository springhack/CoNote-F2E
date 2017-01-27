'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style3 = require('antd/lib/button/style');

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _style4 = require('antd/lib/input/style');

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
                    Author: SpringHack - springhack@live.cn
                    Last modified: 2017-01-27 14:25:04
                    Filename: Register.js
                    Description: Created by SpringHack using vim automatically.
            **/


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

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
            email: '',
            verify: ''
        };
        return _this;
    }

    _createClass(_class, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_input2.default, { type: 'text', onChange: function onChange(e) {
                        return _this2.setState({ user: e.target.value });
                    }, addonBefore: '\u8D26\u53F7', placeholder: 'username' }),
                _react2.default.createElement(_input2.default, { type: 'password', onChange: function onChange(e) {
                        return _this2.setState({ pass: e.target.value });
                    }, addonBefore: '\u5BC6\u7801', placeholder: 'password' }),
                _react2.default.createElement(_input2.default, { type: 'email', onChange: function onChange(e) {
                        return _this2.setState({ email: e.target.value });
                    }, addonBefore: '\u90AE\u7BB1', placeholder: 'e-mail address' }),
                _react2.default.createElement(_input2.default, { type: 'text', onChange: function onChange(e) {
                        return _this2.setState({ verify: e.target.value });
                    }, addonBefore: '\u9A8C\u8BC1', placeholder: 'verify code' }),
                _react2.default.createElement(
                    _button2.default,
                    { onClick: function onClick(e) {
                            return _this2.doReg(e);
                        } },
                    '\u6CE8\u518C'
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (process.env.NODE_SSR) console.log('Server'); //Won't happend
            else console.log('Client');
        }
    }, {
        key: 'doReg',
        value: function doReg(e) {}
    }]);

    return _class;
}(_react2.default.Component)) || _class;

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/common/components/Register.js');
}();

;