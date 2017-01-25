'use strict';

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _reactRouter = require('react-router');

var _server = require('react-dom/server');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _routes = require('./routes.js');

var _routes2 = _interopRequireDefault(_routes);

var _components = require('./components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); /**
                                            Author: SpringHack - springhack@live.cn
                                            Last modified: 2017-01-25 12:16:39
                                            Filename: src/server/main.js
                                            Description: Created by SpringHack using vim automatically.
                                    **/

var Template = _fs2.default.readFileSync(_path2.default.resolve(__dirname, '../dist/index.html'), { encoding: 'utf8' });

app.set('trust proxy', 1);

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use((0, _expressSession2.default)({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true
    }
}));
app.use(function (req, res, next) {
    (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
        if (err) res.status(500).end('Internal Server Error ' + err);else if (redirectLocation) res.redirect(302, redirectLocation.pathname + redirectLocation.search);else if (renderProps) {
            var html = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, renderProps));
            res.status(200).end(Template.replace('Loading...', html));
        } else next();
    });
});
app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist')));

app.listen(3000);
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(app, 'app', 'src/server/main.js');

    __REACT_HOT_LOADER__.register(Template, 'Template', 'src/server/main.js');
}();

;