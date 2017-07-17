(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'src/menulist/templates/categorieslist.template.html',
  bindings: {
    items: '<'
  }
});

})();