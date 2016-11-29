/**
 * Created by taxiweb on 24/11/2016.
 */
mpTn.controller('addStoreCTRL', ['$scope', 'syncStoresSvc', function ($scope, syncStoresSvc) {

    var Store = function() {
        this.title = "";
        this.mainImageUrl = "";
        this.iconUrl = "";
        this.description = "";
        this.tel = "";
        this.adress = "";
    };

    $scope.store = new Store();

    $scope.message = "mes";

    $scope.addTheStore = function () {
        syncStoresSvc.addStore(angular.copy($scope.store));

        $scope.store = new Store();
    };

    $scope.updateStore = function (id) {
        syncProductsSvc.updateStore(id);
    };
}]);