'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _container = require('muicss/lib/react/container');

var _container2 = _interopRequireDefault(_container);

var _row = require('muicss/lib/react/row');

var _row2 = _interopRequireDefault(_row);

var _col = require('muicss/lib/react/col');

var _col2 = _interopRequireDefault(_col);

var _panel = require('muicss/lib/react/panel');

var _panel2 = _interopRequireDefault(_panel);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
                    Author: SpringHack - springhack@live.cn
                    Last modified: 2017-02-08 16:12:39
                    Filename: App.js
                    Description: Created by SpringHack using vim automatically.
            **/


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _Login = require('./Login.js');

var _Login2 = _interopRequireDefault(_Login);

var _Register = require('./Register.js');

var _Register2 = _interopRequireDefault(_Register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _mobxReact.observer)(_class = function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(_class, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _container2.default,
                { className: 'App' },
                _react2.default.createElement(
                    _panel2.default,
                    { className: 'Title' },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'CoNote - A free note 4 U'
                    )
                ),
                _react2.default.createElement(
                    _panel2.default,
                    { className: 'User' },
                    _react2.default.createElement(
                        _row2.default,
                        null,
                        _react2.default.createElement(
                            _col2.default,
                            { md: 6 },
                            _react2.default.createElement(_Login2.default, null)
                        ),
                        _react2.default.createElement(
                            _col2.default,
                            { md: 6 },
                            _react2.default.createElement(_Register2.default, null)
                        )
                    )
                ),
                _react2.default.createElement(
                    'h6',
                    null,
                    'Design by SpringHack'
                )
            );
        }
    }]);

    return _class;
}(_react2.default.Component)) || _class;