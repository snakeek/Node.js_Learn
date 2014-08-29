/**
 * Created with JetBrains WebStorm.
 * User: admin
 * Date: 14-8-29
 * Time: 上午10:50
 * To change this template use File | Settings | File Templates.
 */
var server = require('./ShowRequest');
var router = require('./router');

server.start(router.route);