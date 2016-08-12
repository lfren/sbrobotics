'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
    .directive('logo',function() {
    	return {
  		templateUrl:'scripts/directives/header/logo/logo.html',
  		restrict:'E',
  		replace:true
  	}
  });
