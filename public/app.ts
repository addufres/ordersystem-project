import * as angular from 'angular';
import 'angular-route';
import homeComponent from './home/home';
import customersComponent from './customers/customers';
import customerDetailComponent from './customerDetail/customerDetail';
import CustomerService from './customers/customerService';
import AddressService from './shared/addressService';

angular.module('app', ['ngRoute'])
    .component('home', homeComponent)
    .component('customers', customersComponent)
    .component('customerDetail', customerDetailComponent)
    .service('customerService', CustomerService)
    .service('addressService', AddressService);

angular.module('app').config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);