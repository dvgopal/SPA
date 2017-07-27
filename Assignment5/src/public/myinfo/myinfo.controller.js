(function() {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);


/**
 * Handles login form credentials and redirects user to page.
 */
MyInfoController.$inject = ['ApiPath','isSignedUp','SignupService','MenuService'];
/**
 * Used to store and track information about the currently logged in user.
 * This is intended to be injected any time we need some user metadata
 * or to find out if the user is authenticated.
 **/
function MyInfoController(ApiPath,isSignedUp,SignupService,MenuService) {
  var $ctrl = this;
   $ctrl.basePath = ApiPath;
   $ctrl.isSigned = function(){
     return SignupService.isSignedUp;
   }

   $ctrl.getFirstName = function(){
     return SignupService.firstName;
   }
   $ctrl.getLastName = function(){
     return SignupService.lastName;
   }
   $ctrl.getEmail = function(){
     return SignupService.email;
   }
   $ctrl.getPhone= function(){
     return SignupService.phone;
   }
   $ctrl.getFavItem = function(){
     return SignupService.favItem;
   }
}

})();
