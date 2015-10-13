var app = angular.module('app',['ngMaterial'])
.config(function($mdThemingProvider){
  $mdThemingProvider.theme('default')
  .primaryPalette('green')
  .accentPalette('blue');
});
