'use strict';

angular.module('vierBe', [])

.factory('VierBeUserInfoService', function () {
  return {
    userId: false,

    isLoggedIn: function () {
      return angular.element(document.body).hasClass('logged-in');
    },

    fetchUserId: function ()  {
      var classes = (angular.element(document.body).attr('class') || "").split(/\s+/),
        userIdClass,
        userId = false;

      for (var i = 0, c = classes.length; i < c; i++) {
        userIdClass = classes[i].split('-');

        if (userIdClass[0] === 'userid') {
          userId = userIdClass[1];
          break;
        }
      }

      return userId;
    },

    getUserId: function () {
      this.userId = this.userId || this.fetchUserId();
      return this.userId;
    }
  };
});