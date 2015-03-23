angular.module('noteApp')
  .controller('mainController', ['newNote', function(newNote) {

    this.listNotes = newNote.noteList;

    this.showForm = false;
    this.showForm2 = false;
    this.showColorForm = false;

    /* Create new note */
    this.newForm = function() {
      this.showForm = true;
      newNote.addNote(this.mydata);
      this.mydata = {};
      this.showBtn = true;
      this.showForm = false;
    };

    /* Displays form */
    this.showNote = function() {
      this.showForm = true;
    };

    /* Discards */
    this.discard = function() {
      this.showForm = false;
      this.showForm2 = false;
      // list.select = false;
    };

    this.editPopup = function(index, list,colour) {
      this.selectedList = list;
      this.listIndex = index;
      this.colour = colour;
      this.showForm2 = true;
    };

    this.editTextNote = function() {
      newNote.editTextNote(this.listIndex, this.selectedList, this.colour);
      this.discard();
    };

    this.showColour = function() {
      this.showColorForm = true;
    };

    this.setTextColour = function(colour) {
      this.userTxtColour = newNote.getTextColour(colour);
      this.showColorForm = false;
      this.showForm = true;
      this.showForm2 = false;
    };

    this.setBackgroundColour = function(colour) {
      this.userBgdColour = newNote.getBackgroundColour(colour);
      this.showColorForm = false;
      this.showForm = true;
      this.showForm2 = false;
    };

    this.goBack = function() {
      this.showColorForm = false;
      this.showForm = true;
      this.showForm2 = false;
    };

    /* Shows the content for editing. */
    this.isSelected = function(list) {
      list.select = true;
    };

    /* Save Edited Note */
    this.save = function(list) {
      // newNote.edited(list);
      list.select = false;
    };

    /* Delete Note */
    this.remove = function(list, $index) {
    	var removal = confirm("Are you sure you want to delete this note?");
    	if(removal === true){
      	newNote.deleteNote(list, $index);
    	}
    };

  }]);
