myApp.controller("Weather", ["$scope", "$http", function($scope, $http){
    $scope.data = [];
    $scope.city = {};
    $scope.search = function(city){

      $http.get("http://api.openweathermap.org/data/2.5/weather?q=" + city.name +"&units=imperial&APPID=InsertApiHere")
        .then(function(response){
          $scope.city = {};
          console.log(response.data);
          $scope.data = [];
          $scope.data.push(response.data);
      });
    };


}]);
