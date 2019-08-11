angular.module('book.controller', ['book.services'])
.controller('tableCtrl',  function($scope, $http, bookService){

            bookService.validate().then(
                function success(response){
                    console.log(response.data.message)
                    $scope.Books = response.data.message
                }
            )
            //console.log(ser)
            //debugger
            $scope.newBook = {
                "name":"",
                "author": ""
            }
            // $http.get("http://localhost:3022/book")
            // .then(function(response){
            //     console.log("Hi ")
            //     console.log(response.data.message);
            //     //$scope.Books = response.data.message;
            //     console.log("BYe")
            // });
            $scope.addBook = function()
            {
                console.log($scope.newBook);
                bookService.addBook($scope.newBook).then(
                    function success(response){
                    console.log(response.data.message);
                    $scope.Books.push($scope.newBook);
                    $scope.newBook.name ="";
                    $scope.newBook.author="";
                })

                /*$http.post("http://localhost:3022/book", JSON.stringify($scope.newBook))
                .then(function(response){
                    console.log(response.data.message)
                    $scope.Books.push($scope.newBook);
                })*/
            }
    });
