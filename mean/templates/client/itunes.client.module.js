(function (app) {
  'use strict';

  app.registerModule('<%= appname%>s', ['core']);// The core module is required for special route handling; see /core/client/config/core.client.routes
  app.registerModule('<%= appname%>s.services');
  app.registerModule('<%= appname%>s.routes', ['ui.router', 'core.routes', '<%= appname%>s.services']);
}(ApplicationConfiguration));
