/**
 * Created with JetBrains WebStorm.
 * User: snakeek
 * Date: 14-8-27
 * Time: 下午10:02
 * To change this template use File | Settings | File Templates.
 */
//event.js
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event', function(){
   console.log('some_event occured!');
});
setTimeout(function(){
    event.emit('some_event');
}, 1000);