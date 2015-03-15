angular.module('noteApp')
	.controller('mainController', ['newNote', function(newNote) {

 		this.showForm = false;
 		this.showBtn = true;

 		this.listNotes = newNote.noteList;

 		/* Create new note */
 		this.newForm = function(mydata){
			this.showForm = true;
			this.showBtn = false;
 			newNote.addNote(mydata);
 			this.showBtn = true;
 			this.showForm = false;
 		};
 		
		/* Displays the form */
		this.showNote = function(){
			this.showBtn = false;
			this.showForm = true;
		};

		/* Discards */
		this.discard = function(){
			this.showForm = false;
			this.showBtn = true;
		};

		/* Shows the content for editing. */
		this.isSelected = function(list){
			list.select = true;
		};

		this.save = function(list){
			newNote.edited(list);
		};

		this.remove = function(list, $index){
			newNote.deleteNote(list, $index);
		};

 	}]);