/*
 * Angular Facebook - Module
 */

var fbmod = angular.module("zangular-facebook",["fbmod"]);

fbmod.controller('mainCtrl', [
	'$scope', 'zfacebook', function($scope, zfacebook){
		
		zfacebook();
		
	}]);



