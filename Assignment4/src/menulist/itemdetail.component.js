(function () {
'use strict';

angular.module('MenuApp')
.component('itemDetail', {
  templateUrl: 'src/menulist/templates/item-detail.template.html',
  bindings: {
    items: '<'
  }
});

})();