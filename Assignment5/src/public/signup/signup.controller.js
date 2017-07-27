(function() {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);


/**
 * Handles login form credentials and redirects user to page.
 */
SignupController.$inject = ['isSignedUp','SignupService','MenuService'];
/**
 * Used to store and track information about the currently logged in user.
 * This is intended to be injected any time we need some user metadata
 * or to find out if the user is authenticated.
 **/
function SignupController(isSignedUp,SignupService,MenuService) {
  var $ctrl = this;
  $ctrl.firstname = '';
  $ctrl.lastname = '';
  $ctrl.email = '';
  $ctrl.phone = '';
  $ctrl.favitem = '';
  $ctrl.invalid = false;
  /**
   * Load the current user with username and token
   */
   $ctrl.saveDetails = function() {
     console.log("saveDetails Clicked");
     if($ctrl.favitem===""){

     } else {
       var promise = MenuService.getMenuItem($ctrl.favitem);
         promise.then(function (response) {
           console.log(response);
           if(response != undefined){
             SignupService.signup($ctrl.firstname,$ctrl.lastname,$ctrl.email,$ctrl.phone,$ctrl.favitem);
           } else {
             $ctrl.invalid = true;
           }

         })
         .catch(function (error) {
           $ctrl.invalid = true;
           console.log(error);
         });
     }
  };

   $ctrl.valid = function() {
     return  $ctrl.invalid;

   }
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
