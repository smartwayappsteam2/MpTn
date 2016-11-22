/**
 * Created by younesahmed on 22/11/2016.
 */

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
