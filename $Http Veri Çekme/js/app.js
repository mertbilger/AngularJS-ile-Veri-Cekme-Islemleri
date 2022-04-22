var app = angular.module("App",[]);

app.controller("Controller", function($scope,$http){
        $http.get("https://jsonplaceholder.typicode.com/users").then(function(response) {
          $scope.users = response.data;
        });
      
 
});
