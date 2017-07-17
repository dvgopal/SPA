(function () {
'use strict';

angular.module('MenuApp')
.controller('MainMenuListController', MainMenuListController);


MainMenuListController.$inject = ['items'];
function MainMenuListController(items) {
  var categoriesList = this;
  categoriesList.items = items;
}

})();
