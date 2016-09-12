(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";

  $scope.showMessage = function(){
      return $scope.message;
  };

  $scope.checkIfTooMuch = function () {

    var msg  = checkString($scope.inputstring);
    $scope.message = msg;
  };

  function checkString (str){
    console.log($scope.inputstring);
    var msg = ""

    if( (typeof(str) !== "undefined")  && (String.prototype.trim.call(str).length > 0 ))
    {
        var arr = str.split(',');
        if(arr[arr.length -1] === ""){
          arr.pop();
        }
        console.log(arr.length);
        if(arr.length <=3 ){
          msg = "Enjoy!";
        } else if (arr.length >3){
          msg = "Too Much!";
        }
    } else {
      return "Please enter the Data";
    }
    return msg;
  };

}

})();
