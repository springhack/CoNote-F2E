/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-01-27 14:14:01
        Filename: ../../client/config/Config.js
        Description: Created by SpringHack using vim automatically.
**/
export default {
    APIServer : 'http://123.190.246.17:9000',
    getServer(path) {
        return `${this.APIServer}${path}`;
    }
};
