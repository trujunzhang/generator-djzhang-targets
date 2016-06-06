(function () {
    'use strict';

    angular
        .module('<%= appname%>s.routes')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {
        $stateProvider
            .state('<%= appname%>s', {
                abstract: true,
                url: '/<%= appname%>s',
                template: '<ui-view/>'
            })
            .state('<%= appname%>s.List', {
                url: '',
                templateUrl: 'modules/_<%= appname%>s/client/views/list-<%= appname%>s.client.view.html',
                controller: '<%= appclassname%>sListController',
                controllerAs: 'vm',
                data: {
                    pageTitle: '<%= appclassname%>s List'
                },
                // default uri params
                params: {
                    page: 1
                }
            });
    }

    get<%= appclassname%>.$inject = ['$stateParams', '<%= appclassname%>sService'];

    function get<%= appclassname%>($stateParams, <%= appclassname%>sService) {
        return <%= appclassname%>sService.get({
            <%= appname%>Id: $stateParams.<%= appname%>Id
        }).$promise;
    }

    new<%= appclassname%>.$inject = ['<%= appclassname%>sService'];

    function new<%= appclassname%>(<%= appclassname%>sService) {
        return new <%= appclassname%>sService();
    }
}());
