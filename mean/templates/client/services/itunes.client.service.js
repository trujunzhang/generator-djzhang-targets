(function () {
  'use strict';

  angular
    .module('<%= appname%>s.services')
    .factory('<%= appclassname%>sService', <%= appclassname%>sService);

  <%= appclassname%>sService.$inject = ['$resource'];

  function <%= appclassname%>sService($resource) {
    return $resource('api/<%= appname%>s/:<%= appname%>Id', {
      <%= appname%>Id: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
}());
