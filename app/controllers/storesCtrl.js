/**
 * Created by younesahmed on 22/11/2016.
 */

mpTn.controller('storesCtrl', ['$scope','$location','syncStoresSvc', function ($scope,$location,syncStoresSvc) {


    $scope.stores = syncStoresSvc.getStores();

    $scope.showStore = function (index) {

        syncStoresSvc.setStoreToShow($scope.stores[index])

        var storeID = $scope.stores[index].storeID
        $location.path ('/store/').search({storeID:storeID});
    }

}]);
