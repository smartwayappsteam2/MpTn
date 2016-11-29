/**
 * Created by taxiweb on 24/11/2016.
 */

mpTn.factory('syncProductsSvc', ['FIREBASE_URI', '$firebaseArray','$firebaseObject', function (FIREBASE_URI, $firebaseArray,$firebaseObject) {
    var productsUri = FIREBASE_URI + '/products';
    var ref = new Firebase(productsUri);

    var products = $firebaseArray( ref);

    var getProducts = function () {
        return products;
    };

    var getProductsForCategory = function (category) {
        return $firebaseArray( ref.orderByChild("category").equalTo(category));;
    };

    var getBestProducts = function () {
        return $firebaseArray( ref.orderByChild("nbView"));
    };

    var addProduct = function (item) {
        products.$add(item);
    };

    var updateProduct = function (id) {
        products.$save(id);
    };

    var getProductWithID = function (productID) {
        return $firebaseObject(ref.child(productID));
    };

    return {
        getProducts: getProducts,
        getProductsForCategory:getProductsForCategory,
        getBestProducts: getBestProducts,
        addProduct: addProduct,
        updateProduct: updateProduct,
        getProductWithID: getProductWithID
    } }]);