(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['items','catName'];
function ItemDetailController(items,catName) {
  var itemDetail = this;
  itemDetail.items = items;
  itemDetail.catName = catName;
}

})();
