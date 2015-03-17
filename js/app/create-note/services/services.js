angular.module('noteApp')
	.service('newNote', function(){

	/* stores the list of notes */
	/*this.noteList = [
			{
		 		title: 'Welcome to Andel Note',
		 		content: 'This is a default content for the Andel note app. You can add, delete and edit notes. Do check it out.',
		 		select: false,
		 		createdOn: new Date(),
		 		bgdColour: null,
		 		txtColour: null
		 	}
		];*/

	/* Creates a new note */
	this.addNote = function(mydata){
		//console.log(mydata);
		var newData = mydata;
		newData.createdOn = new Date();
		newData.bgdColour = this.colourPalette;
		this.noteList.push(newData);
		//this.colourPalette = null;
	};	

	/* Hides the content after editing */
	this.edited = function(list){
		list.select = false;
	};

	/* Deletes the selected note */
	this.deleteNote = function(list, $index){
		if(this.noteList.indexOf(list) === 0){
			this.noteList.shift();
		}
		this.noteList.splice(this.noteList.indexOf(list), $index);
	};

	this.setColour = function(colour){
    var newColour = angular.copy(colour);
		this.colourPalette = this.colourStyle(newColour.red, newColour.green, newColour.blue);
    return this.colourPalette;
	};
	
  this.colourStyle = function(red,green,blue){
    var colourVal = 'hsl('+ red + ',' + green + '%' + ','+ blue + '%' + ')';
    return colourVal;
  };
        	
});
	