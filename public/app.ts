import * as angular from 'angular';
import 'angular-route';

import hashPrefixConfig from './config.hashprefix';
import routeProviderConfig from './config.routes';
import homeComponent from './home/home';
import navigationComponent from './navigation/navigation';
import customersComponent from './customers/customers';
import customerDetailComponent from './customerDetail/customerDetail';
import CustomerService from './customers/customerService';
import AddressService from './shared/addressService';
import validateDateDirective from './directives/validateDate';
import customersTableComponent from './customers/customers-table';

angular.module('app', ['ngRoute'])
    .config(hashPrefixConfig)
    .config(routeProviderConfig)
    .directive('validateDate', validateDateDirective)
    .component('navigation', navigationComponent)
    .component('home', homeComponent)
    .component('customers', customersComponent)
    .component('customerDetail', customerDetailComponent)
    .component('customersTable', customersTableComponent)
    .service('customerService', CustomerService)
    .service('addressService', AddressService);
