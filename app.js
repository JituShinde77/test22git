angular.module('myApp', 
    [
        'ngRoute',
        'receipe',
        'book'
    ]).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Home', {
        templateUrl : 'modules/receipe/views/receipe.html',
        controller: 'indexController'
    })
    .otherwise( {
         redirectTo: '/Home'
     });
     
   
}]);













