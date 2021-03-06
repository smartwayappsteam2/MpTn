/**
 * Created by taxiweb on 24/11/2016.
 */

mpTn.factory('syncStoresSvc', ['FIREBASE_URI', '$firebaseArray','$firebaseObject', 'firebaseDataService', function (FIREBASE_URI, $firebaseArray,$firebaseObject, firebaseDataService) {

    var Store = function() {
        this.title = "";
        this.mainImageUrl = "";
        this.iconUrl = "";
        this.description = "";
        this.tel = "";
        this.adress = "";
    };

    var storeToShow = new Store()


    var ref = firebaseDataService.stores

    var stores = $firebaseArray(firebaseDataService.stores);

    var getStores = function () {
        return stores;
    };

    var getStoreWithID = function (storeID) {
        return $firebaseObject(ref.child(storeID));
    };

    var addStore = function (item) {
        stores.$add(item);
    };

    var updateStore = function (id) {
        stores.$save(id);
    };

    var setStoreToShow = function (aStore) {
        storeToShow = aStore
    };

    var getStoreToShow = function () {
        return storeToShow;
    };

    return {
        getStores: getStores,
        addStore: addStore,
        updateStore: updateStore,
        setStoreToShow: setStoreToShow,
        getStoreToShow: getStoreToShow,
        getStoreWithID:getStoreWithID
    }


    return {
        getStores: getStores
    } }]);