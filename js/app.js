/*
 * Angular Facebook - Module
 */

var fbmod = angular.module("zangular-facebook",["fbmod"]);

fbmod.controller('mainCtrl', [
	'$scope', 'zfacebook', function($scope, zfacebook){
		
		zfacebook.init({
			appid: "<your-app-id>"
		}).then(function(fb){
			fb.login(function(response){
				console.log(response);
			}, {scope: [zfacebook.extendedpermissions.email, zfacebook.permissions.userbirthday]});
		});
	}]);



