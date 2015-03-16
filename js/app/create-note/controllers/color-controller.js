angular.module("noteApp", [])

.controller("ColourController", ["$scope","PaletteService", function ($scope,PaletteService){
    
    $scope.colour = {
		// red: 0,
		// green: 0,
		// blue: 0
	};

    $scope.colour2={
        
    };

    $scope.Style = [];
   
  
	$scope.add = function (colour) {
        // call createcolor method on service
          // give it the values and expect a new style
        var style = PaletteService.createColor(colour);
        console.log(style);
        $scope.Style.push(style);
    };
    
    $scope.removeColor = function(index){
        $scope.Style.splice(index,1);
    };

    $scope.clearAll = function(){
        $scope.Style =[];
        $scope.colour.red ="";
        $scope.colour.blue="";
        $scope.colour.green="";
    };

    $scope.editPointColour = function(index){
        
    $scope.Style[index].style = {background: 'hsl('+$scope.colour2.red+','+$scope.colour2.green+'%'+','+$scope.colour2.blue+'%'+')'};
        $scope.colour2.red ="";
        $scope.colour2.blue="";
        $scope.colour2.green="";
    };
    $scope.sortPics = function(){
    
    };
}]);
    
  /*  colourPallete.controller("EditController",["$scope",function($scope){
    
    $scope.colour2 = {
    
    };
        
        $scope.paint = function(){
        
        $scope.newStyle={background: 'hsl'+red+','+green+'%'+','+blue+'%'+')'};
        };
    }]);*/