/**
 * Created by younesahmed on 22/11/2016.
 */

mpTn.controller('homeCtrl', ['$scope', '$uibModal', 'syncProductsSvc', function ($scope, $uibModal, syncProductsSvc) {

    $scope.products = syncProductsSvc.getProducts();

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
    

    likeOrDislikProduct = function () {
        
    }

}]);