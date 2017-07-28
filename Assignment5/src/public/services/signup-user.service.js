(function() {
"use strict";

angular.module('public')
.service('SignupService', SignupService);

SignupService.$inject = ['$http', 'ApiPath','MenuService'];
function SignupService($http, ApiPath) {
  var service = this;
  // var serivce.firstName = "";
  // var serivce.lastName = "";
  // var serivce.email = "";
  // var serivce.phone = "";
  // var serivce.favitem = "";
  // var serivce.isSignedUp = false;
  service.isSignedUp = false;
  /** Retrieves an access token using a username and password */
  service.signup = function(first,last,email,phone,favitem,category) {
    service.firstName = first;
    service.lastName = last;
    service.email = email;
    service.phone = phone;
    service.favItem = favitem;
    service.category = category;
    // service.shortName = shortname;
    service.isSignedUp = true;
  };


  service.getSignupStatus = function(){
      return service.isSignedUp;
  };

}

})();
