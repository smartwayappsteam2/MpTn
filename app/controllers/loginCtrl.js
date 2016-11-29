/**
 * Created by younesahmed on 22/11/2016.
 */

mpTn.controller('loginCtrl', ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {


    $scope.close = function () {
        $uibModalInstance.close('cancel');
    };
}]);

