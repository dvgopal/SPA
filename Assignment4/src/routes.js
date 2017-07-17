(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    //templateUrl: 'src/shoppinglist/templates/home.template.html'
    templateUrl: 'src/menulist/templates/home.template.html'
  })

  // Premade list page
  .state('categoriesList', {
    url: '/categories-list',
    templateUrl: 'src/menulist/templates/main-menulist.template.html',
    controller: 'MainMenuListController as categoriesList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  .state('itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/menulist/templates/itemdetaillist.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getShortName($stateParams.itemId)
                    .then(function(result){
                      return MenuDataService.getItemsForCategory(result);
                    });
            }],
      catName: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getShortName($stateParams.itemId)
                    .then(function(result){
                      return result;
                    });
            }]

      }
  });

  // Premade list page
  // .state('mainList', {
  //   url: '/main-list',
  //   templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
  //   controller: 'MainShoppingListController as mainList',
  //   resolve: {
  //     items: ['ShoppingListService', function (ShoppingListService) {
  //       return ShoppingListService.getItems();
  //     }]
  //   }
  // })

  // .state('itemDetail', {
  //   url: '/item-detail/{itemId}',
  //   templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
  //   controller: 'ItemDetailController as itemDetail',
  //   resolve: {
  //     item: ['$stateParams', 'ShoppingListService',
  //           function ($stateParams, ShoppingListService) {
  //             return ShoppingListService.getItems()
  //               .then(function (items) {
  //                 return items[$stateParams.itemId];
  //               });
  //           }]
  //   }
  // });
}

})();
