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
        var count = 0;
        for(var a in arr){
          if(String.prototype.trim.call(arr[a]).length>0){
            count++;
          }
        }
        console.log("count is:" + count);

        if(count >0 && count <=3 ){
          msg = "Enjoy!";
          $scope.colorStyle={"color":"green"};
          $scope.borderColorStyle = {"border-color":"green"};
        } else if(count > 3){
          msg = "Too Much!";
          $scope.colorStyle={"color":"green"};
          $scope.borderColorStyle = {"border-color":"green"};
        } else if(count == 0){
          msg = "Please enter Proper Data";
          $scope.colorStyle={"color":"red"};
          $scope.borderColorStyle = {"border-color":"red"};
        }

    } else {

      msg= "Please enter the Data";
      $scope.colorStyle = {"color":"red"};
      $scope.borderColorStyle = {"border-color":"red"};
    }
    return msg;
  };

}

})();
