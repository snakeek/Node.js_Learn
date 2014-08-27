/**
 * Created by admin on 2014/8/27.
 */
function Second(){
    var name;
    this.setName = function(thyName){
        name = thyName;
    };
    this.sayHello = function(){
        console.log('Hello' + name);
    };
};
module.exports = Second;