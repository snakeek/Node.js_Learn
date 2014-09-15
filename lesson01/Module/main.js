/**
 * Created by snakeek on 2014/8/27.
 */

var Second = require('./hello');
test = new Second();
test.setName(' EKEK');
test.sayHello();

var third = require('./third');
third('third');