(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('BuyController', BuyController)
.controller('BoughtController', BoughtController)
.service('ShoppingList', ShoppingListCheckOffService);

// LIST #1 - controller
BuyController.$inject = ['ShoppingList'];
function BuyController(ShoppingList) {
  var ToBuyController = this;
ShoppingList.addToBuyItem("Books","10");
ShoppingList.addToBuyItem("pens","10");
ShoppingList.addToBuyItem("erasers","5");
ShoppingList.addToBuyItem("sketches","4");
ShoppingList.addToBuyItem("ruler","1");
ShoppingList.addToBuyItem("pencils","13");
  ToBuyController.Items = ShoppingList.getToBuyItems();

  ToBuyController.removeItem = function (itemIndex) {
    console.log(itemIndex);
    ShoppingList.removeItem(itemIndex);
  };

}


// LIST #2 - controller
BoughtController.$inject = ['ShoppingList'];
function BoughtController(ShoppingList) {
  var itemsAddr = this;
  itemsAddr.items = ShoppingList.getAlreadyBoughtItems();
}


// If not specified, maxItems assumed unlimited
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var alreadyBoughtItems = [];
  var toBuyItems = [];

  service.addToBuyItem = function(itemName, quantity) {
      var item = {
        name:itemName,
        quantity:quantity
      }
      toBuyItems.push(item);
      console.log(item);
  };

  service.addAlreadyBoughtItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      alreadyBoughtItems.push(item);
      console.log(item);
  };

  service.removeItem = function (itemIndex) {
    var item = toBuyItems[itemIndex];
    console.log(item);
    service.addAlreadyBoughtItem(item.name,item.quantity);
    toBuyItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  };

}

})();
