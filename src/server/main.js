/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-01-27 00:26:59
        Filename: src/server/main.js
        Description: Created by SpringHack using vim automatically.
**/
import 'babel-polyfill';

import hook from 'node-hook';

hook.hook('.css', (source, filename) => '');
hook.hook('.less', (source, filename) => '');

require('./server.js');
