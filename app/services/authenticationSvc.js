/**
 * Created by taxiweb on 29/11/2016.
 */

mpTn
    .factory('authService', ['$firebaseAuth', 'firebaseDataService',

function authService($firebaseAuth, firebaseDataService) {
    var firebaseAuthObject = $firebaseAuth();



    /////////// observe login logout change ////
    var observerCallbacks = [];

    //register an observer
    function registerObserverCallback (callback){
        observerCallbacks.push(callback);
    };

    //call this when you know 'foo' has been changed
    var notifyObservers = function(firebaseUser){
        angular.forEach(observerCallbacks, function(callback){
            callback(firebaseUser);
        });
    };


    


    firebaseAuthObject.$onAuthStateChanged(function(firebaseUser) {

        notifyObservers(firebaseUser);
    });


    var service = {
        firebaseAuthObject: firebaseAuthObject,
        register: register,
        login: login,
        loginWithProvider: loginWithProvider,
        logout: logout,
        isLoggedIn: isLoggedIn,
        sendWelcomeEmail: sendWelcomeEmail,
        registerObserverCallback: registerObserverCallback,
        authenticated : authenticated
    };

    return service;

    ////////////

    function register(user) {
        console.log("register user service")
        return firebaseAuthObject.$createUserWithEmailAndPassword(user.email, user.password);
    }

    function login(user) {
        return firebaseAuthObject.$signInWithEmailAndPassword(user.email, user.password);
    }

     function loginWithProvider(provider){
        // login with Facebook
        return firebaseAuthObject.$signInWithPopup(provider)
    }


    function logout() {

        firebaseAuthObject.$signOut();
    }





    function isLoggedIn() {
        return firebaseAuthObject.$getAuth();
    }




    function sendWelcomeEmail(emailAddress) {
        firebaseDataService.emails.push({
            emailAddress: emailAddress
        });
    }

}])
