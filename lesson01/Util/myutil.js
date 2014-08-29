/**
 * Created with JetBrains WebStorm.
 * User: admin
 * Date: 14-8-29
 * Time: 上午11:24
 * To change this template use File | Settings | File Templates.
 */
var util = require('util');
function Base(){
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function(){
        console.log('Hello ', this.name);
    }                                    ;
}

Base.prototype.showName = function(){
    console.log(this.name);
};

function Sub(){
    this.name = 'sub';
}

util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
//not extends
//objSub.sayHello();
console.log(objSub);

console.log('===============================');

function Person() {
    this.name = 'snakeek';
    this.toString = function() {
        return this.name;
    }
}

var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));

console.log('===============================') ;

console.log(util.isArray([])==true?"true":"false");
console.log(util.isArray(new Array)==true?'true':'false');
console.log(util.isArray({})==true?'true':'false');

console.log('===============================');

console.log(util.isRegExp(/some regexp/)==true?'true':'false');
console.log(util.isRegExp(new RegExp('another regexp'))==true?'true':'false');
console.log(util.isRegExp({})==true?'true':'false');