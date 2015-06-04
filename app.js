var express = require('express');
var path = require('path');
var http = require ('http');

var app = express();
app.set('appName', 'hello-world');
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(_dirname, 'views'));
app.set('view engine', 'jade');
