(function(){
    'use strict';

    productsController.$inject = ['$scope', 'productService'];
    function productsController($scope, productService){
        $scope.title = 'Products';

        activate();

        function activate(){
            $scope.products = productService.getProducts();
        }
    }


    angular.module('app').controller('productsController', productsController);
})();