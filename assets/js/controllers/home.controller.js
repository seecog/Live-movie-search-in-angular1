angular.module("myMovie").controller('HomeController',function(MovieService,$scope){

    MovieService.getPopularMovies().then(function(res){
        $scope.popular_movies =res;
        console.log(res)
    })
    .catch(function(err){
        console.log('The error is ',err)
    })
    
})