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


mpTn.controller('homeCtrl', ['$scope', '$uibModal', function ($scope, $uibModal) {

    $scope.showProduct = function () {
        var modalInstance = $uibModal.open({

            templateUrl: 'views/app.html',
            controller: 'popupProductCtrl',
            windowClass: 'product-modal-window'
        });

    };
    $scope.products = [


        {
            image: "https://thingd-media-ec4.thefancy.com/default/1264361306236912735_33e71e370a07.jpg",
            name: "cat1"
        },

        {
            image: "https://thingd-media-ec3.thefancy.com/default/1289677788151808885_5efc48efe25d.jpg",
            name: "cat2"
        },

        {
            image: "http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg",
            name: "cat3"
        },
        {
            image: "http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg",
            name: "cat4"
        },
        {
            image: "http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg",
            name: "cat5"
        },
        {
            image: "http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg",
            name: "cat6"
        }
    ]

}]);


mpTn.controller('loginCtrl', function ($scope) {

    $scope.message = 'Test2';

});

mpTn.controller('lien1Ctrl', function ($scope) {

    $scope.message = 'lien1';

});
mpTn.controller('productsCtrl', ['$scope', '$uibModal', '$routeParams', function ($scope, $uibModal, $routeParams) {


    $scope.showProduct = function () {
        var modalInstance = $uibModal.open({

            templateUrl: 'views/app.html',

            controller: 'popupProductCtrl',
            windowClass: 'product-modal-window'
        });

    };
    $scope.message = $routeParams.productsType;
    $scope.products = [
        {
            image: "http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg",
            name: "cat4"
        },
        {
            image: "http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg",
            name: "cat5"
        },

        {
            image: "https://thingd-media-ec4.thefancy.com/default/1264361306236912735_33e71e370a07.jpg",
            name: "cat1"
        },

        {
            image: "https://thingd-media-ec3.thefancy.com/default/1289677788151808885_5efc48efe25d.jpg",
            name: "cat2"
        },

        {
            image: "http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg",
            name: "cat3"
        },
        {
            image: "http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg",
            name: "cat4"
        },
        {
            image: "http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg",
            name: "cat5"
        },
        {
            image: "http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg",
            name: "cat6"
        }, {
            image: "https://thingd-media-ec4.thefancy.com/default/1264361306236912735_33e71e370a07.jpg",
            name: "cat1"
        },

        {
            image: "https://thingd-media-ec3.thefancy.com/default/1289677788151808885_5efc48efe25d.jpg",
            name: "cat2"
        }
    ]
}]);

mpTn.controller('storesCtrl', ['$scope','$location', function ($scope,$location) {


    $scope.stores = [

        {
            name: "store1",
            description: "man & woman",
            headerImg: "https://resize-ec3.thefancy.com/resize/1924x712/thefancy/CoverImages/default/fancy_saleitemseller_50832_fb44ea15be5d.jpg",
            iconImg: "https://resize-ec1.thefancy.com/resize/crop/220/thefancy/CoverImages/original/fancy_saleitemsellerlogo_50832_90510f884a61.jpg",
            storeID : "azeaze"
        },
        {
            name: "store2",
            description: "man & woman",
            headerImg: "https://resize-ec6.thefancy.com/resize/1924x1443/thefancy/CoverImages/default/fancy_saleitemseller_50048_7de37e95cefe.jpg",
            iconImg: "https://resize-ec4.thefancy.com/resize/crop/220/thefancy/CoverImages/original/fancy_saleitemsellerlogo_50048_194d161dfabd.png"
            ,storeID : "qsdqsd"
        }, {
            name: "store3",
            description: "man & woman",
            headerImg: "https://resize-ec6.thefancy.com/resize/1924x1443/thefancy/CoverImages/default/fancy_saleitemseller_50048_7de37e95cefe.jpg",
            iconImg: "https://resize-ec4.thefancy.com/resize/crop/220/thefancy/CoverImages/original/fancy_saleitemsellerlogo_50048_194d161dfabd.png"
,storeID : "bcvb"
        }, {
            name: "store4",
            description: "man & woman",
            headerImg: "https://resize-ec3.thefancy.com/resize/1924x712/thefancy/CoverImages/default/fancy_saleitemseller_50832_fb44ea15be5d.jpg",
            iconImg: "https://resize-ec1.thefancy.com/resize/crop/220/thefancy/CoverImages/original/fancy_saleitemsellerlogo_50832_90510f884a61.jpg"
,storeID : "mlk"
        }

    ]
    $scope.showStore = function (index) {
        var storeID = $scope.stores[index].storeID
        $location.path ('/store/').search({storeID:storeID});
    }

}]);


mpTn.controller('popupProductCtrl', ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {
    $scope.product = {
        image: "https://thingd-media-ec4.thefancy.com/default/1264361306236912735_33e71e370a07.jpg",
        name: "cat1",
        description: "Le meilleur Produit 2016",
        price: "$2OO",
        images:[
            {imageUrl:"https://thingd-media-ec4.thefancy.com/default/1264361306236912735_33e71e370a07.jpg"},
            {imageUrl:"https://thingd-media-ec4.thefancy.com/default/1264361306236912735_33e71e370a07.jpg"},
            {imageUrl:"https://thingd-media-ec4.thefancy.com/default/1264361306236912735_33e71e370a07.jpg"},
            {imageUrl:"https://thingd-media-ec4.thefancy.com/default/1264361306236912735_33e71e370a07.jpg"},
            {imageUrl:"https://thingd-media-ec4.thefancy.com/default/1264361306236912735_33e71e370a07.jpg"},
            {imageUrl:"https://thingd-media-ec4.thefancy.com/default/1264361306236912735_33e71e370a07.jpg"}
        ],
        storeID:""
    }

        $scope.store =
        {

            name: "store1",
            description: "man & woman",
            headerImg: "https://resize-ec3.thefancy.com/resize/î1924x712/thefancy/CoverImages/default/fancy_saleitemseller_50832_fb44ea15be5d.jpg",
            iconImg: "https://resize-ec1.thefancy.com/resize/crop/220/thefancy/CoverImages/original/fancy_saleitemsellerlogo_50832_90510f884a61.jpg",

            products: [{
                image: "http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg",
                name: "cat6"
            },
                {
                image: "https://thingd-media-ec4.thefancy.com/default/1264361306236912735_33e71e370a07.jpg",
                name: "cat1"
            },

                {
                    image: "https://thingd-media-ec3.thefancy.com/default/1289677788151808885_5efc48efe25d.jpg",
                    name: "cat2"
                }]
        }
    $scope.close = function () {
        $uibModalInstance.close('cancel');
    };
}]);

mpTn.controller('storeCtrl', ['$scope', '$uibModal','$routeParams', function ($scope, $uibModal,$routeParams) {

    $scope.message = $routeParams.storeID;



    $scope.store =
    {

        name: "store1",
        description: "man & woman",
        headerImg: "https://resize-ec3.thefancy.com/resize/1924x712/thefancy/CoverImages/default/fancy_saleitemseller_50832_fb44ea15be5d.jpg",
        iconImg: "https://resize-ec1.thefancy.com/resize/crop/220/thefancy/CoverImages/original/fancy_saleitemsellerlogo_50832_90510f884a61.jpg",

        products: [{
            image: "http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg",
            name: "cat6"
        },
            {
                image: "https://thingd-media-ec4.thefancy.com/default/1264361306236912735_33e71e370a07.jpg",
                name: "cat1"
            },

            {
                image: "https://thingd-media-ec3.thefancy.com/default/1289677788151808885_5efc48efe25d.jpg",
                name: "cat2"
            },  {
                image: "https://thingd-media-ec3.thefancy.com/default/1289677788151808885_5efc48efe25d.jpg",
                name: "cat2"
            }]
    }

    $scope.products = [
        {
            image: "http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg",
            name: "cat4"
        },
        {
            image: "http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg",
            name: "cat5"
        },

        {
            image: "https://thingd-media-ec4.thefancy.com/default/1264361306236912735_33e71e370a07.jpg",
            name: "cat1"
        },

        {
            image: "https://thingd-media-ec3.thefancy.com/default/1289677788151808885_5efc48efe25d.jpg",
            name: "cat2"
        },

        {
            image: "http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg",
            name: "cat3"
        },
        {
            image: "http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg",
            name: "cat4"
        },
        {
            image: "http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg",
            name: "cat5"
        },
        {
            image: "http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg",
            name: "cat6"
        }, {
            image: "https://thingd-media-ec4.thefancy.com/default/1264361306236912735_33e71e370a07.jpg",
            name: "cat1"
        },

        {
            image: "https://thingd-media-ec3.thefancy.com/default/1289677788151808885_5efc48efe25d.jpg",
            name: "cat2"
        }
    ]

    $scope.showProduct = function () {
        var modalInstance = $uibModal.open({

            templateUrl: 'views/app.html',
            controller: 'popupProductCtrl',
            windowClass: 'product-modal-window'
        });

    };
}]);