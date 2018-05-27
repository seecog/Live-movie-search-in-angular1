angular.module('myMovie').service('MovieService',function($http,$q){

this.getPopularMovies =function(){
    var obj= $q.defer();
    $http.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8301a21598f8b45668d5711a814f01f6").then(function(res){
        obj.resolve(res.data.results)
    })
    .catch(function(err){
        obj.reject(err)
        console.log('The error is ',err)
    })
    return obj.promise;
}


})