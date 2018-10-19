(function(){
    'use strict';

    ordersController.$inject = ['$scope', 'orderService', 'customerService'];
    function ordersController($scope, orderService, customerService) {
        $scope.title = 'Orders';

        activate();

        function activate() {
            $scope.customers = customerService.getCustomers();
            $scope.orders = orderService.getOrders();
            $scope.orders.forEach(function (order) {
                var customer = _.find($scope.customers, function (customer) {
                    return order.customerId === customer.id;
                })
                order.customerName = customer.fullName;
            });
        }
    }

    angular.module('app').controller('ordersController', ordersController);
})();    