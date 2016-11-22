/**
 * Created by younesahmed on 22/11/2016.
 */
mpTn.controller('homeCtrl', ['$scope', '$uibModal', function ($scope, $uibModal) {

    $scope.showProduct = function () {
        var modalInstance = $uibModal.open({

            templateUrl: 'views/popupProduct.html',
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