angular.module('noteApp')
	.controller('mainController', ['newNote', function(newNote) {
		this.colour = {
		// red: 0,
		// green: 0,
		// blue: 0
		};
 		this.showForm = false;
 		this.showBtn = true;
 		this.show = false;

 		this.listNotes = newNote.noteList;

 		/* Create new note */
 		this.newForm = function(mydata){
			this.showForm = true;
			this.showBtn = false;
 			newNote.addNote(mydata);
 			this.showBtn = true;
 			this.showForm = false;
 		};
 		this.showColor = function(){
 			console.log(this.show);
 			this.show = true;
 			console.log(true);

 		};
 		this.Styles = [];
 		this.myStyle ={};
 		 this.MyStyle = function(red,green,blue){
        this.style = {background: 'hsl('+red+','+green+'%'+','+blue+'%'+')'};
    };
		this.setBackground = function(value){
 	//		this.style = {};
 	//	this.MyStyles = function(red,green,blue){
      //  this.style = {background: 'hsl('+red+','+green+'%'+','+blue+'%'+')'};

      this.colour = angular.copy(value);
      this.show = false;
 			this.showForm = true;
 			this.style = new MyStyle(colour.red, colour.green, colour.blue);
      this.Styles.push(style);
 		};
 		this.setTextColor = function(data){
 			this.colour = angular.copy(data);
 			this.show=false;
 			this.showForm = true;
 			newNote.addNote.bgdColor = {color:'hsl('+this.colour.red+','+this.colour.green+'%'+','+this.colour.blue+'%'+')'};
 			this.myStyle.style = {color:'hsl('+this.colour.red+','+this.colour.green+'%'+','+this.colour.blue+'%'+')'};
 			 };

 		
 		this.back = function()
 		{
 			this.show = false;
 			this.showForm = true;
 		}
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