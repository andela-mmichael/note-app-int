angular.module('noteApp')
  .controller('mainController', ['newNote', function(newNote) {

    this.listNotes = newNote.noteList;

    this.showForm = false;
    //this.showBtn = true;
    this.show = false;
    this.showForm2 = false;

    /* Create new note */
    this.newForm = function() {
      this.showForm = true;
      //this.showBtn = false;
      newNote.addNote(this.mydata);
      this.mydata = {};
      this.showBtn = true;
      this.showForm = false;
    };

    /* Displays the form */
    this.showNote = function() {
      //this.showBtn = false;
      this.showForm = true;
    };

    /* Discards */
    this.discard = function() {
      this.showForm = false;
      this.showForm2 = false;
      //this.showBtn = true;
    };

    this.editPopup = function(index, list,colour) {
      console.log('popping up edit form.....');
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
      this.show = true;
    };

    this.setTextColour = function(colour) {
      this.userTxtColour = newNote.getTextColour(colour);
      //console.log(this.userTxtColour);
      this.show = false;
      this.showForm = true;
    };

    this.setBackgroundColour = function(colour) {
      this.userBgdColour = newNote.getBackgroundColour(colour);
      this.show = false;
      this.showForm = true;
    };

    this.goBack = function() {
      this.show = false;
      this.showForm = true;
      this.showForm2 = false;
    };

    /* Shows the content for editing. */
    this.isSelected = function(list) {
      list.select = true;
    	console.log(list.select);
    };

    /* Save Edited Note */
    this.save = function(list) {
      newNote.edited(list);
    };

    /* Delete Note */
    this.remove = function(list, $index) {
      newNote.deleteNote(list, $index);
    };

  }]);
