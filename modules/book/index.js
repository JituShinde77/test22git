angular.module('book', ['book.controller'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Book', {
        templateUrl : 'modules/book/views/book.html',
        controller: 'tableCtrl'
    })
}]);