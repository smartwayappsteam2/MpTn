/**
 * Created by younesahmed on 22/11/2016.
 */

mpTn.controller('storeCtrl', ['$scope', '$uibModal','$routeParams', 'syncStoresSvc','syncProductsSvc', function ($scope, $uibModal,$routeParams,syncStoresSvc,syncProductsSvc) {

    $scope.message = $routeParams.storeID;



    $scope.store = syncStoresSvc.getStoreToShow()

    $scope.store3ProductsID = []

    $scope.products = []



    for( key in $scope.store.products ){
        console.log(key)
        $scope.store3ProductsID.push(key)
    };
    var index = 0
    for( key in $scope.store3ProductsID ){
        productID = ''+$scope.store3ProductsID[key]
        var product = syncProductsSvc.getProductWithID(productID)
        console.log(productID)
        $scope.products.push(product)

        index++
        if(index == 3){
            break
        }

    };


    $scope.showProduct = function (index) {
        var modalInstance = $uibModal.open({

            templateUrl: 'views/popupProduct.html',
            controller: 'popupProductCtrl',
            windowClass: 'product-modal-window',
            resolve: {
                productToSHow: function () {
                    return $scope.products[index];
                }
            }
        });

    };


}]);