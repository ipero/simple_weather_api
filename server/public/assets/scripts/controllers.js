myApp.controller("Weather", ["$scope", "$http", function($scope, $http){
    $scope.data = [];
    $scope.city = {};
    $scope.search = function(city){

      $http.get("http://api.openweathermap.org/data/2.5/weather?q=" + city.name +"&units=imperial&APPID=3ef3229e863be6438c649f285ea3a5cb")
        .then(function(response){
          $scope.city = {};
          console.log(response.data);
          $scope.data = [];
          $scope.data.push(response.data);
      });
    };


}]);
