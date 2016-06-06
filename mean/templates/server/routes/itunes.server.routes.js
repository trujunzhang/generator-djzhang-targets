'use strict';

/**
 * Module dependencies
 */
var <%= appname%>sPolicy = require('../policies/<%= appname%>s.server.policy'),
  <%= appname%>s = require('../controllers/<%= appname%>s.server.controller');

module.exports = function (app) {
  // <%= appclassname%>s collection routes
  app.route('/api/<%= appname%>sList/:page')
      .get(<%= appname%>s.<%= appname%>sList);

  app.route('/api/totalItems')
      .get(<%= appname%>s.totalItems);  
};
