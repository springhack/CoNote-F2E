/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-01-27 00:20:21
        Filename: src/server/main.js
        Description: Created by SpringHack using vim automatically.
**/
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import path from 'path';
import fs from 'fs';
import {match, RouterContext} from 'react-router';
import {renderToString} from 'react-dom/server';
import React from 'react';

import routes from './routes.js';

import {App} from './components';

const app = express();
const Template = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), {encoding : 'utf8'});

app.set('trust proxy', 1);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true
    }
}));
app.use((req, res, next) => {
    match({routes, location : req.url}, (err, redirectLocation, renderProps) => {
        if (err)
            res.status(500).end(`Internal Server Error ${err}`);
        else if (redirectLocation)
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        else if (renderProps) {
            let html = renderToString(<RouterContext {...renderProps} />);
            res.status(200).end(Template.replace('Loading...', html));
        } else
            next();
    });
});
app.use(express.static(path.resolve(__dirname, '../dist')));

app.listen(3000);
