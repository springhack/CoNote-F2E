'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _components = require('./components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _react2.default.createElement(
    _reactRouter.Route,
    { path: '/' },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _components.App })
); /**
           Author: SpringHack - springhack@live.cn
           Last modified: 2017-01-28 01:45:52
           Filename: ../routes.js
           Description: Created by SpringHack using vim automatically.
   **/


exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/common/routes.js');
}();

;