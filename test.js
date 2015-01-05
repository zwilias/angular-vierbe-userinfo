'use strict';

angular.module('testApp', ['vierBe'])

.controller('MainController', function(VierBeUserInfoService, $scope) {
  $scope.isLoggedIn = VierBeUserInfoService.isLoggedIn();
  $scope.userId = VierBeUserInfoService.getUserId();
});