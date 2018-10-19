(function(){
    'use strict';

    productDetailController.$inject = ['$scope', 'product'];
    function productDetailController($scope, product){
        $scope.title = 'Product Detail';
        $scope.product = product;
    }

    angular.module('app').controller('productDetailController', productDetailController);
})();