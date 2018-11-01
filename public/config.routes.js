angular.module('app')
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            template : '<home></home>'
        }).when('/customers', {
            template : '<customers></customers>'
        }).when('/orders', {
            template : '<orders></orders>'
        }).when('/products', {
            template : '<products></products>'
        }).when('/customers/:id', {
            template: '<customer-detail customer="$resolve.customer"></customer-detail>',
            resolve: {
                customer: [
                    '$route', 'customerService', function ($route, customerService) {
                        var id = parseInt($route.current.params.id);
                        return customerService.getCustomer(id);
                    }
                ]
			}
        }).when('/orders/:id', {
            template : '<order-detail order="$resolve.order"></order-detail>',
            resolve: {
                order: [
                    '$route', 'orderService', function ($route, orderService) {
                        var id = parseInt($route.current.params.id);
                        return orderService.getOrder(id);
                    }
                ]
            }
        }).when('/products/:id', {
            templateUrl : './productDetail/productDetail.html',
            controller  : 'productDetailController',
            resolve: {
                product: [
                    '$route', 'productService', function ($route, productService) {
                        var id = parseInt($route.current.params.id);
                        return productService.getProduct(id);
                    }
                ]
            }
        });
    }]);