/**
 * Created with JetBrains WebStorm.
 * User: admin
 * Date: 14-8-28
 * Time: 下午6:16
 * To change this template use File | Settings | File Templates.
 */
var http = require('http');
var url = require('url');

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log('Server has started.');
}

exports.start = start;
