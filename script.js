const myLibrary = [];

function Book(title, author, pages, read){
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;

	
	this.info = function(){
		if (this.read == "Yes"){
			return `${title} by ${author}, ${pages} pages`
		}
		else {
			return `${title} by ${author}, ${pages} pages, not read yet`
		}
	}
}

function addMore() {
	// Get the "row" element to be copied
	var rowToCopy = document.querySelector('.row');

	// Clone the row element and its content
	var newRow = rowToCopy.cloneNode(true);

	// Append the cloned row to the "info" div
	var infoDiv = document.querySelector('.info');
	infoDiv.appendChild(newRow);
}

function addToLibrary(){
	var counter = 0
	myLibrary.forEach(function(book){
		if (counter == 0){
			var tablebody = document.querySelector('#tableBody')
			var first_row = tablebody.querySelector('tr')
			var titleCell = first_row.querySelector(".titleCell");
			var authorCell = first_row.querySelector(".authorCell");
			var pagesCell = first_row.querySelector(".pagesCell");
			var readCell = first_row.querySelector(".readCell");

			// Populate the cells with object properties
			titleCell.textContent = book.title;
			authorCell.textContent = book.author;
			pagesCell.textContent = book.pages;
			readCell.textContent = book.read;
			counter++
		}
		else{
			var tableBody = document.querySelector('#tableBody');
    
			// Create a new row and cells
			var newRow = tableBody.insertRow(counter);
			var titleCell = newRow.insertCell(0);
			var authorCell = newRow.insertCell(1);
			var pagesCell = newRow.insertCell(2);
			var readCell = newRow.insertCell(3);
		
			// Populate the cells with object properties
			titleCell.textContent = book.title;
			authorCell.textContent = book.author;
			pagesCell.textContent = book.pages;
			readCell.textContent = book.read;
		
			counter++; // Increment the counter for the next row
		}
	})
}

function createBooks(){
	var infoDiv = document.querySelector('.info');
    var rows = infoDiv.querySelectorAll('.row');
	rows.forEach(function(row) {
		var title = row.querySelector('#title').value;
		var author = row.querySelector('#author').value;
		var pages = row.querySelector('#pages').value;
		var read = row.querySelector('input[name="ticket_type"]:checked').value;
		myLibrary.push(new Book(title, author, pages, read))
		console.log(myLibrary[0].info())
	})
	addToLibrary()
}