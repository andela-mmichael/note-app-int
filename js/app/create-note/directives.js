angular.module('noteApp')
	.directive('createNote', function(){
 		return {
 			restrict: 'E',
 			templateUrl: 'js/app/create-note/new-note.html'

 		};
 	});