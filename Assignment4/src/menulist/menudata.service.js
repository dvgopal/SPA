(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$q','$http', 'ApiBasePath'];
function MenuDataService($q, $http, ApiBasePath) {
  var service = this;
 
  service.getAllCategories = function () {
    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
    }).then(function(result){

      service.foundItems= result.data;
      return service.foundItems;

    });

  };

  service.getShortName = function(index){
    if(!service.foundItems){
     return service.getAllCategories().then ( function (result) {
        return service.foundItems[index].short_name;
     })
    } else{
      var deferred = $q.defer();
      deferred.resolve(service.foundItems[index].short_name);
      return deferred.promise;
    }
  };

  service.getItemsForCategory = function (shortName) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: shortName
      }
    }).then(function(result){
        return result.data.menu_items;
    });

  };

}


})();
