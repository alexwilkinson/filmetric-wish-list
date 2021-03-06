'use strict';

/* Directives */


angular.module('myApp.directives', [])
  .directive('addMovieForm', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/add-movie-form.html'
    }
  })
  .directive('movieList', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/movie-list.html',
      controller: ['$scope', '$location', 'listService', function($scope, $location, listService){
        this.calcQuality = function(movie){
          var average = (movie.critics_score + movie.audience_score)/2;
          if(average > 75){
            return "good";
          }else if(average >= 50 && average <= 75){
            return "ok";
          }else if(average < 50){
            return "bad";
          }
        };
        this.isGoodImg = function(score){
          if(score > 60){
            return "good-rt-img";
          }else {
            return "bad-rt-img";
          }
        };
        this.criticsImg = function(score){
          if(score > 60){
            return "img/fresh.png";
          }else {
            return "img/rotten.png";
          }
        };
        this.audienceImg = function(score){
          if(score > 60){
            return "img/popcorn.png";
          }else {
            return "img/spilled.png";
          }
        };
        this.showMovie = function(){
          this.cleanUpView($location.path());
          $scope.visible = true;
        };
        this.cleanUpView = function(view){
          $('.movie-in-list').hide();
          $('.page-title').text($scope.m.title);
          if(view == '/wish-list'){
            $('.add-link').hide();
            $scope.wishCtrl.showForm = false;
          }else if(view == '/discover'){
            $('discover-form').hide();
          }
        };
        this.goBack = function(){
          $scope.visible = false;
          this.changeBackTitle();
          $('.add-link').show();
          $('discover-form').show();
          $('.movie-in-list').show();
        };
        this.changeBackTitle = function(){
          if($location.path() == '/wish-list'){
            $('.page-title').text('Wish List');
          }else if($location.path() == '/discover'){
            $('.page-title').text('Discover');
          }
        };
        this.addToWishList = function(movie){
          listService.addMovie(movie);
        };
        this.isOnWishList = function(movie){
          var response = listService.onWishList(movie);
          return response;
        };
        this.removeFromWishList = function(movie){
          listService.removeMovie(movie);
          this.goBack();
        };
      }],
      controllerAs: 'listCtrl'
    }
  })
  .directive('movieDisplay', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/movie-display.html',
      controller: [ '$scope', function($scope){
        this.movie = $scope.m;
        $scope.visible = false;
      }],
      controllerAs: 'movieCtrl'
    }
  })
  .directive('discoverForm', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/discover-form.html'
    }
  })
  .directive('a', function(){
    return {
      restrict: 'E',
      link: function(scope, elem, attrs) {
        if(attrs.ngClick || attrs.href === '' || attrs.href === '#'){
          elem.on('click', function(e){
            e.preventDefault();
          });
        }
      }
     }
  });
