'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _default = {
    APIServer: 'http://115.159.151.158:3060',
    getServer: function getServer(path) {
        return '' + this.APIServer + path;
    },
    getFetch: function getFetch() {
        var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'GET';
        var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var fethcConfig = {
            method: method,
            mode: 'cors',
            credentials: 'include',
            headers: Object.assign({
                'Content-Type': 'application/json'
            }, headers)
        };
        method == 'GET' || Object.keys(body).length == 0 || (fethcConfig.body = JSON.stringify(body));
        return fethcConfig;
    }
};
/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-01-31 13:27:36
        Filename: Config.js
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