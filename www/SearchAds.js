var exec = cordova.require('cordova/exec');

var SearchAds = {};

SearchAds.initialize = function(onSuccess, onError) {
    var errorCallback = function(obj) {
        onError(obj);
    };

    var successCallback = function(obj) {
        onSuccess(obj);
    };

    exec(successCallback, errorCallback, 'SearchAds', 'initialize');
};

if (typeof module != 'undefined' && module.exports) {
    module.exports = SearchAds;
}
