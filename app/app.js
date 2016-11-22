var mpTn = angular.module('mpTn', ['ngRoute', 'ui.bootstrap']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginCtrl'
        })
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'homeCtrl'
        })
        .when('/panier', {
            templateUrl: 'views/panier.html',
            controller: 'panierCtrl'
        })
        .when('/store/:storeID?', {
            templateUrl: 'views/store.html',
            controller: 'storeCtrl'
        })
        .when('/products/:productsType?', {
            templateUrl: 'views/products.html',
            controller: 'productsCtrl'
        })
        .when('/product4X/:productsType?', {
            templateUrl: 'views/product4X.html',
            controller: 'productsCtrl'
        })
        .when('/stores', {
            templateUrl: 'views/stores.html',
            controller: 'storesCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        })
}]);


