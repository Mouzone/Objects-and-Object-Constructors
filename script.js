const myLibrary = [];

function Book(title, author, pages, read){
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	
	this.info = function(){
		if (read){
			return `${title} by ${author}, ${pages} pages`
		}
		else {
			return `${title} by ${author}, ${pages} pages, not read yet`
		}
	}
}

function addBookToLibrary() {
    
}

function submitText() {
	// Get the user's input from the textbox
	var userInput = document.getElementById("userInput").value;

	// Display the user's input on the page
	document.getElementById("output").textContent = "You entered: " + userInput;
}