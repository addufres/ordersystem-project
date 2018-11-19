import * as angular from 'angular';
import 'angular-route';

import 'jquery';
import 'lodash';

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
import discountComponent from './customerDetail/discount';
import ordersComponent from './orders/orders';
import orderDetailComponent from './orderDetail/orderDetail';
import productsComponent from './products/products';
import productDetailComponent from './productDetail/productDetail';
import ProductService from './products/productService';
import AuthenticationService from './shared/authenticationService';
import OrderService from './orders/orderService';

angular.module('app', ['ngRoute'])
    .config(hashPrefixConfig)
    .config(routeProviderConfig)
    .directive('validateDate', validateDateDirective)
    .component('discount', discountComponent)
    .component('navigation', navigationComponent)
    .component('home', homeComponent)
    .component('customers', customersComponent)
    .component('customerDetail', customerDetailComponent)
    .component('customersTable', customersTableComponent)
    .component('orders', ordersComponent)
    .component('orderDetail', orderDetailComponent)
    .component('products', productsComponent)
    .component('productDetail', productDetailComponent)
    .service('customerService', CustomerService)
    .service('addressService', AddressService)
    .service('productService', ProductService)
    .service('authenticationService', AuthenticationService)
    .service('orderService', OrderService);
