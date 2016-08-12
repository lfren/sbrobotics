'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('mission',function() {
    return {
        templateUrl:'scripts/directives/mission/mission.html',
        restrict: 'E',
        replace: true,
    }
  });
