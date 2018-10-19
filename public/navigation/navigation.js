(function(){
    'use strict';

    function navigation(){
        return {
            restrict: 'E',
            templateUrl: '../navigation/navigation.html',
            link: function(scope, element, attrs, ctrl){
            }
        }
    }
    
    angular.module('app').directive('navigation', navigation)
})();