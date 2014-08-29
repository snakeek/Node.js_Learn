/**
 * Created by snakeek on 2014/8/27.
 */
var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');

//Get Request
/*
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(8888);
*/

//Post Request
http.createServer(function(req, res) {
    var post = '';

    req.on('data', function(chunk) {
        post += chunk;
    });

    req.on('end', function() {
        post = querystring.parse(post);
        console.log(util.inspect(post));
        res.end(util.inspect(post));
    });
}).listen(8888);

console.log('Server running on port 8888.');