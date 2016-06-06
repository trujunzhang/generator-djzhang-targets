(function () {
    'use strict';

    angular
        .module('<%= appname%>s')
        .controller('<%= appclassname%>sListController', <%= appclassname%>sListController);

    <%= appclassname%>sListController.$inject = ['<%= appclassname%>sService', '$stateParams', '$http'];

    function <%= appclassname%>sListController(<%= appclassname%>sService, $stateParams, $http) {
        var vm = this;

        vm.totalItems = 0;
        vm.currentPage = 1;

        vm.setPage = function (pageNo) {
            vm.currentPage = pageNo;
        };

        vm.pageChanged = function () {
            vm.get<%= appclassname%>s();
        };

        vm.get<%= appclassname%>s = function () {
            $http.get('api/<%= appname%>sList/' + vm.currentPage).success(function (response) {
                vm.<%= appname%>s = response;
            }).error(function (response) {
                vm.error = response.message;
            });
        };

        getTotalItems();

        function getTotalItems() {
            $http.get('api/totalItems/').success(function (response) {
                vm.totalItems = response;
            }).error(function (response) {
                vm.error = response.message;
            });
        }

    }
}());
