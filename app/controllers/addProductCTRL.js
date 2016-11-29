/**
 * Created by taxiweb on 24/11/2016.
 */
mpTn.controller('addProductCTRL', ['$scope', 'syncProductsSvc', function ($scope, syncProductsSvc) {

    var Product = function() {
        this.title = "az";
        this.mainImageUrl = "";
        this.description = "";
        this.prix = 0;
        this.storeID = "";
    };

    $scope.product = new Product();

    $scope.message = "mes";
    
    $scope.addTheProduct = function () {
        syncProductsSvc.addProduct(angular.copy($scope.product));
        $scope.message = "addProduct";
        $scope.product = new Product();
    };

    $scope.updateProduct = function (id) {
        syncProductsSvc.updateProduct(id);
    };
}]);