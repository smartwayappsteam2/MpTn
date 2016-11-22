/**
 * Created by younesahmed on 22/11/2016.
 */

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