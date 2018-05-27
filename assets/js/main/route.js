angular.module("myMovie").config(function($routeProvider){

    $routeProvider.when('/',{
        templateUrl : '../../assets/views/home.html',
        controller : 'HomeController'
    })
    .when('/contact',{
        template : '<h1>Contact</h1>',
        controller : 'ContactController'
    })

})