angular.module('noteApp')
  .directive('createNote', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/new-note.html'
    };
  });