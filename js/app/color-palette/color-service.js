angular.module('palette')

.factory('PaletteService',function(){
    var style = {};

    var MyStyle = function(red,green,blue){
        this.style = {background: 'hsl('+red+','+green+'%'+','+blue+'%'+')'};
    };
        
    style.createColor = function(colour){
      var style = new MyStyle(colour.red, colour.green, colour.blue);
      return style;
    }

    style.removeColor = function(colour){
      var style = new MyStyle(colour.red, colour.green, colour.blue);
      return style;
    }

    return style;
});