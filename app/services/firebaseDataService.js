/**
 * Created by taxiweb on 30/11/2016.
 */

   mpTn.factory('firebaseDataService',[

    function firebaseDataService() {
        var root = firebase.database().ref();

        var service = {
            root: root,
            products: root.child('products'),
            stores: root.child('stores'),
            emails: root.child('emails')
        };

        return service;
    }

])
