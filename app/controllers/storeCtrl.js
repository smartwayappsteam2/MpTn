/**
 * Created by younesahmed on 22/11/2016.
 */

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

            templateUrl: 'views/popupProduct.html',
            controller: 'popupProductCtrl',
            windowClass: 'product-modal-window'
        });

    };
}]);