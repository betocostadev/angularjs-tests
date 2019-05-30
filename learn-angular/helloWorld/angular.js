// First test - Hello World
// const angular = require('angularjs');
angular.module('helloWorld',[]);
    angular.module('helloWorld').controller('helloWorldCtrl', function ($scope){
      $scope.message = 'Hello World!';
    });