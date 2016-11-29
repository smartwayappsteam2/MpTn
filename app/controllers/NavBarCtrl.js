/**
 * Created by younesahmed on 29/11/2016.
 */
mpTn.controller('navBarCtrl', ['$scope', '$uibModal', function ($scope, $uibModal) {

    $scope.showLogin = function () {
        var modalInstance = $uibModal.open({

            templateUrl: 'views/login.html',
            controller: 'loginCtrl',
        });

    };
}]);