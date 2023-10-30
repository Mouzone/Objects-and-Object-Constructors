const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    return this.read === 'Yes'
      ? `${this.title} by ${this.author}, ${this.pages} pages`
      : `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
  }
}

function addMore() {
  const rowToCopy = document.querySelector('.row');
  const newRow = rowToCopy.cloneNode(true);

  // Clear input values in the new row
  newRow.querySelectorAll('input[type="text"], input[type="number"]').forEach((input) => {
    input.value = '';
  });

  // Reset the radio button to 'No' in the new row
  newRow.querySelectorAll('input[name^="ticket_type"]').forEach((radio) => {
    radio.checked = false;
  });

  // Generate a unique name for the radio buttons
  const timestamp = Date.now();
  newRow.querySelectorAll('input[type="radio"]').forEach((radio) => {
    const oldName = radio.getAttribute('name');
    const newName = oldName + '_' + timestamp;
    radio.setAttribute('name', newName);
  });

  const infoDiv = document.querySelector('.info');
  infoDiv.appendChild(newRow);
}

function addToLibrary() {
  const tableBody = document.querySelector('#tableBody');
  myLibrary.forEach((book) => {
    const newRow = tableBody.insertRow();
    newRow.insertCell(0).textContent = book.title;
    newRow.insertCell(1).textContent = book.author;
    newRow.insertCell(2).textContent = book.pages;
    newRow.insertCell(3).textContent = book.read;
  });
  myLibrary.length = 0;
}

function clearAndResetForm() {
  const infoDiv = document.querySelector('.info');
  const rows = infoDiv.querySelectorAll('.row');
  rows.forEach((row, index) => {
    if (index !== 0) {
      infoDiv.removeChild(row);
    } else {
      row.querySelectorAll('input[type="text"], input[type="number"]').forEach((input) => {
        input.value = '';
      });
      row.querySelector('input[name="ticket_type"][value="no"]').checked = true;
    }
  });
}

function createBooks() {
  const infoDiv = document.querySelector('.info');
  const rows = infoDiv.querySelectorAll('.row');
  rows.forEach((row) => {
    const title = row.querySelector('#title').value;
    const author = row.querySelector('#author').value;
    const pages = row.querySelector('#pages').value;
    const read = row.querySelector('input[name^="ticket_type"]:checked').value;
    myLibrary.push(new Book(title, author, pages, read));
  });

  addToLibrary();
  clearAndResetForm();
}
