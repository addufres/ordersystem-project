(function(){
    'use strict';

    homeController.$inject = ['$scope'];
    function homeController($scope){
        $scope.title = 'Awesome, Inc. Internal Ordering System';
    }

    angular.module('app').controller('homeController', homeController);
})();