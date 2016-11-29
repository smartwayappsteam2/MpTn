/**
 * Created by younesahmed on 22/11/2016.
 */

mpTn.controller('popupProductCtrl', ['$scope','$location', '$uibModalInstance','productToSHow','syncStoresSvc','syncProductsSvc', function ($scope,$location, $uibModalInstance,productToSHow, syncStoresSvc,syncProductsSvc) {
    $scope.product = productToSHow;
    
    

    $scope.store3ProductsID = []
    $scope.store3Products = []

    $scope.getStore = function () {
        $scope.store = syncStoresSvc.getStoreWithID($scope.product.storeID)

        $scope.store.$loaded() .then(function (item) {
                for( key in $scope.store.products ){
                    console.log(key);
                    console.log($scope.product.$id)
                    if(key != $scope.product.$id){
                        $scope.store3ProductsID.push(key)
                    }

                };
                var index = 0
                for( key in $scope.store3ProductsID ){
                    productID = ''+$scope.store3ProductsID[key]
                    var product = syncProductsSvc.getProductWithID(productID)
                    console.log(productID)
                    $scope.store3Products.push(product)

                    index++
                    if(index == 3){
                        break
                    }

                };
            })
            .catch(function(error) {
                console.log("Error:", error);
            });


    }

    $scope.getStore()

    $scope.showStore = function () {
        $uibModalInstance.close('cancel');
        syncStoresSvc.setStoreToShow($scope.store)

        var storeID = $scope.store.storeID
        $location.path ('/store/').search({storeID:storeID});
    }

    $scope.showProduct = function (index) {
        $scope.product = $scope.store3Products[index]
        $scope.store3ProductsID = []
        $scope.store3Products = []

        $scope.getStore()

    }

    $scope.close = function () {
        $uibModalInstance.close('cancel');
    };
}]);