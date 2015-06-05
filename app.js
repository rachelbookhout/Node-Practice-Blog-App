var express = require('express');
var path = require('path');
var http = require ('http');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views',path.join(_dirname, 'views'));
app.set('view engine', 'jade');

app.all('*', function(req,res){
    res.render('index', {msg: "Welcome to the Practical Node.js"})
);
});
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express.js server listening on port' + app.get('port'));
}
);
