/**
 * Created with JetBrains WebStorm.
 * User: admin
 * Date: 14-8-29
 * Time: 下午2:28
 * To change this template use File | Settings | File Templates.
 */
var fs = require('fs');
fs.readFile('./test.txt', 'utf-8', function(err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
});