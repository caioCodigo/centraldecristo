'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('ApsilonApp')
	.directive('footer',function(){
		return {
        templateUrl:'app/scripts/directives/footer/footer.html',
        restrict: 'E',
        replace: true,
    	}
	});
