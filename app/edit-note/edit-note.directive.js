angular.module('noteApp')
  .directive('editNote', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/edit-note.html'
    };
  });