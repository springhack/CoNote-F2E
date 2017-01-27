'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _default = {
    APIServer: 'http://123.190.246.17:9000',
    getServer: function getServer(path) {
        return '' + this.APIServer + path;
    }
};
/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-01-27 14:14:01
        Filename: ../../client/config/Config.js
        Description: Created by SpringHack using vim automatically.
**/
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/common/config/Config.js');
}();

;