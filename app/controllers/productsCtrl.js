/**
 * Created by younesahmed on 22/11/2016.
 */

mpTn.controller('productsCtrl', ['$scope', '$uibModal', '$routeParams','syncProductsSvc', function ($scope, $uibModal, $routeParams,syncProductsSvc) {

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


    if($routeParams.productsType == 'new' || $routeParams.productsType == 'sale' || $routeParams.productsType == 'promo'){
 $scope.products = syncProductsSvc.getProducts();
        
    }
else if( $routeParams.productsType == 'popular'){
        $scope.products = syncProductsSvc.getBestProducts();

    }
    else{
        $scope.products = syncProductsSvc.getProductsForCategory($routeParams.productsType);
    }

    $scope.message = $routeParams.productsType;
}]);
