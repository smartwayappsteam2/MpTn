/**
 * Created by younesahmed on 22/11/2016.
 */


    mpTn
        .controller('loginCtrl', ['$scope','$location', '$uibModalInstance','authService',

    function ($scope,$location, $uibModalInstance, authService) {
        var vm = this;

        vm.user = {
            email: '',
            password: ''
        };

        vm.error = null;

        $scope.registerUser = registerUser;
        $scope.login = login;
        
        $scope.loginWithProvider = loginWithProvider;

        function registerUser(user) {
            console.log("register user contrl")
            return authService.register(user)
                .then(function() {
                    return $scope.login(user);
                })
                .then(function() {
                    return authService.sendWelcomeEmail(user.email);
                })
                .catch(function(error) {
                    vm.error = error;
                });
        }

        function login(user) {
            return authService.login(user)
                .then(function() {
                    $location.path('/products/Men');
                    $scope.close()
                })
                .catch(function(error) {
                    vm.error = error;
                });
        }

        function loginWithProvider(provider) {
            console.log(provider)
            return authService.loginWithProvider(provider)
                .then(function() {
                    $location.path('/products/Men');
                    $scope.close()
                })
                .catch(function(error) {
                    vm.error = error;
                });
        }


        $scope.close = function () {
        $uibModalInstance.close('cancel');
    };
    }

]);

