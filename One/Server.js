/**
 * Created by snakeek on 2014/9/15.
 */
var http = require('http');
var url = require('url');

function start() {
    http.createServer(function(request, response){
        console.log('Request received.');

        var pathname = url.parse(request.url).pathname;
        console.log('pathname is : ' + pathname);

        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Hello World');
        response.end();
    }).listen(18081);

    console.log('Server has started.');
}

exports.start = start;