'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _components = require('./components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
    _reactRouter.Route,
    { path: '/' },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _components.App }),
    _react2.default.createElement(
        _reactRouter.Route,
        { path: 'note', component: _components.Check },
        _react2.default.createElement(_reactRouter.IndexRoute, { component: _components.Note }),
        _react2.default.createElement(_reactRouter.Route, { path: 'edit/:id', component: _components.App }),
        _react2.default.createElement(_reactRouter.Route, { path: 'view/:id', component: _components.App })
    )
); /**
           Author: SpringHack - springhack@live.cn
           Last modified: 2017-01-31 13:07:41
           Filename: ../routes.js
           Description: Created by SpringHack using vim automatically.
   **/