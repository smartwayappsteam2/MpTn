var mpTn = angular.module('mpTn', ['ngRoute', 'ui.bootstrap', 'firebase'])
    .constant('FIREBASE_URI', 'https://gallerie-d306d.firebaseio.com/')
    .config(['$routeProvider', function ($routeProvider) {
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
        .when('/addProduct', {
            templateUrl: 'views/addProduct.html',
            controller: 'addProductCTRL'
        })
        .when('/addStore', {
            templateUrl: 'views/addStore.html',
            controller: 'addStoreCTRL'
        })
        .otherwise({
            redirectTo: '/home'
        })
}]);


