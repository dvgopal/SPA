(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems',FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'menu',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {
  var menu = this;

  menu.isFoundItems = function () {
      if (menu.items.length > 0) {
        return true;
      }
    return false;
  };

}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;

  menu.searchTerm = "";
  menu.searchItems = function () {
    var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
      promise.then(function (response) {
        console.log(response);
        menu.found = response;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  menu.removeItem = function (itemIndex) {
    // this.lastRemoved = "Last item removed was " + this.items[itemIndex].name;
    MenuSearchService.removeItem(itemIndex);
    // this.title = origTitle + " (" + list.items.length + " items )";
    menu.found = MenuSearchService.getFoundItems();
  };

  menu.getErrorMessage = function(){
    return MenuSearchService.getErrorMessage();
  }
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.foundItems=[];
  service.getMatchedMenuItems = function (shortName) {
  service.errorMessage = "";
    if(shortName == "" ){
      service.errorMessage = "Please Enter Search String";
      // return service.foundItems;
    }
    return  $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),

    }).then (function(result) {
      // Process the result.
      console.log(result);
      var items = result.data.menu_items;
      service.foundItems.splice(0,service.foundItems.length);
      if(shortName.length > 0){
        for (var i = 0; i < items.length; i++) {
          var name = items[i].description;
          if (name.toLowerCase().indexOf(shortName) !== -1) {
            service.foundItems.push(items[i]);
          }
        }
      }
      return service.foundItems;
    });

  };

  service.removeItem = function (itemIndex) {
    service.foundItems.splice(itemIndex, 1);
  };

  service.getFoundItems = function(){
    return service.foundItems;
  }

  service.getErrorMessage = function(){
    return service.errorMessage;
  }

}

})();
