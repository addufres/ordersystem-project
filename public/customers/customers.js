(function(){
    'use strict';

    customersController.$inject = ['$scope', 'customerService'];
    function customersController($scope, customerService){
        $scope.title = 'Customers';

        activate();

        function activate(){
            $scope.customers = customerService.getCustomers();
        }
    }

    angular.module('app').controller('customersController', customersController);
})();