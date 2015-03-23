angular.module('noteApp')
  .directive('colorPalette', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/color-palette.html'
    };
  });