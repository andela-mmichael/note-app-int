/*!
 * Andel Note App v1.0.0
 * Author: Mel Michael <Email: mel.michael@andela.co>
 */

 (function(){
 	var app = angular.module('noteApp', ['ngMaterial'])
 		.config(function($mdThemingProvider){
  	$mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('light-blue');
	});

}());