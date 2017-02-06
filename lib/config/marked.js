'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderer = new _marked2.default.Renderer(); /**
                                                        Author: SpringHack - springhack@live.cn
                                                        Last modified: 2017-02-06 11:55:13
                                                        Filename: marked.js
                                                        Description: Created by SpringHack using vim automatically.
                                                **/


_marked2.default.setOptions({
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});

exports.default = _marked2.default;