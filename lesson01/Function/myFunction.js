/**
 * Created with JetBrains WebStorm.
 * User: admin
 * Date: 14-8-28
 * Time: 下午5:53
 * To change this template use File | Settings | File Templates.
 */
var events = require('events');
function say(word){
    console.log(word);
};

function execute(someFunction, value){
    someFunction(value);
};

execute(say, 'Hello!');