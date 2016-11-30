/**
 * Created by younesahmed on 29/11/2016.
 */
mpTn.controller('navBarCtrl', ['$scope', '$uibModal','authService', function ($scope, $uibModal,authService) {

    $scope.showLogin = function () {
        var modalInstance = $uibModal.open({

            templateUrl: 'views/login.html',
            controller: 'loginCtrl',
        });

    };

    $scope.authenticated = false



    $scope.logOut = function () {
        console.log('logout1')
        authService.logout()
        console.log('logout')

    };



    var updateNavBarLogAction = function(firebaseUser){
        console.log('updateNavBarLogAction')
        
        if (firebaseUser) {
            $scope.authenticated = true
        } else {

            $scope.authenticated = false

        }
    };

    authService.registerObserverCallback(updateNavBarLogAction);

}]);