'use strict';

require('babel-polyfill');

var _nodeHook = require('node-hook');

var _nodeHook2 = _interopRequireDefault(_nodeHook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-01-27 00:26:59
        Filename: src/server/main.js
        Description: Created by SpringHack using vim automatically.
**/
_nodeHook2.default.hook('.css', function (source, filename) {
        return '';
});
_nodeHook2.default.hook('.less', function (source, filename) {
        return '';
});

require('./server.js');