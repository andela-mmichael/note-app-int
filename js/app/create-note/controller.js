angular.module('noteApp')
	.controller('mainController', ['newNote', function(newNote) {

 		this.showForm = false;
 		this.showBtn = true;

 		this.listNotes = newNote.noteList;

 		this.newForm = function(mydata){
			this.showForm = true;
			this.showBtn = false;
 			var data = newNote.addNote(mydata);
 		};
 		
		/* Displays the form */
		this.showNote = function(){
			this.showBtn = false;
			this.showForm = true;
		};

		/* this cancels a form without eaving */
		this.discard = function(){
			this.showForm = false;
			this.showBtn = true;
		};

		/*this.selected = function(lis){
			newNote.isSelected(list);
		};*/
			

 	}]);