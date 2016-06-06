(function () {
  'use strict';

  angular
    .module('<%= appname%>s')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: '<%= appclassname%>s',
      state: '<%= appname%>s',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', '<%= appname%>s', {
      title: 'List <%= appclassname%>s',
      state: '<%= appname%>s.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', '<%= appname%>s', {
      title: 'Create <%= appclassname%>',
      state: '<%= appname%>s.create',
      roles: ['user']
    });
  }
}());
