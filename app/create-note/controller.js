angular.module('noteApp')
  .controller('mainController', ['newNote', function(newNote) {

    this.listNotes = newNote.noteList;

    this.showForm = false;
    // this.showEditForm = false;
    this.showColorForm = false;

    // Create new note 
    this.newForm = function(mydata) {
      this.showForm = true;
      newNote.addNote(this.mydata);
      this.mydata = {};
      this.showBtn = true;
      this.showForm = false;
    };

    // Displays new form 
    this.showNote = function() {
      this.showForm = true;
    };

    this.discard = function() {
      this.showForm = false;
      // this.showEditForm = false;
    };

    this.cancel = function(list){
      newNote.edited(list);
    };

    this.showColour = function() {
      this.showColorForm = true;
    };

    // Sets Text colour
    this.setTextColour = function(colour) {
      this.userTxtColour = newNote.getTextColour(colour);
      this.showColorForm = false;
      this.showForm = true;
      // this.showEditForm = false;
    };

    // Sets BAckground Color
    this.setBackgroundColour = function(colour) {
      this.userBgdColour = newNote.getBackgroundColour(colour);
      this.showColorForm = false;
      this.showForm = true;
      // this.showEditForm = false;
    };

    this.goBack = function() {
      this.showColorForm = false;
      this.showForm = true;
      // this.showEditForm = false;
    };

    // Shows the content for editing. 
    this.isSelected = function(list) {
      list.select = true;
    };

    // Saves Edited Note 
    this.save = function(list) {
      list.select = false;
    };

    // Deletes Note 
    this.remove = function(list, $index) {
    	var removal = confirm("Are you sure you want to delete this note?");
    	if(removal === true){
      	newNote.deleteNote(list, $index);
    	}
    };

  }]);
