angular.module('book.service',[])
.factory('bookService', [
  '$http',
    
       function($http) {

         var service = {};
         var urlBase = "http://localhost:3022/book";
         service.validate = Validate
         service.addBook = AddBook
         return service;

        function Validate() {
            //var payload = "username=" + email + "&password=" + password + "&source=" + "WEB_APP";
            //var url =  $http.get($rootScope.endPoint+'/api/user/login/', payload);
            var url =  $http.get(urlBase);
            return $http.get(urlBase );
            //return "Success";
        };

        function AddBook(book){
            //var payload = "name=" +name+"&author="+author;
            var url = $http.post(urlBase, JSON.stringify(book))
            return url;
        }
        
}]);