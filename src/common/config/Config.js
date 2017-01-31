/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-01-31 13:27:36
        Filename: Config.js
        Description: Created by SpringHack using vim automatically.
**/
export default {
    APIServer : 'http://115.159.151.158:3060',
    getServer(path) {
        return `${this.APIServer}${path}`;
    },
    getFetch(method = 'GET', body = {}, headers = {}) {
        let fethcConfig = {
            method : method,
            mode : 'cors',
            credentials : 'include',
            headers : Object.assign({
                'Content-Type' : 'application/json'
            }, headers)
        };
        (method == 'GET') || (Object.keys(body).length == 0) || (fethcConfig.body = JSON.stringify(body));
        return fethcConfig;
    }
};
