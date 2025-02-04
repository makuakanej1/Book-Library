const myLibrary = [];

// using object constructor to create new books from
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// function that takes these parameters and inputs it into the constructor for a new book
function addBookToLibrary(title, author, pages) {
  const book = new Book(title, author, pages);
  myLibrary.push(book);
  displayBooks();
}

// function that iterates over the array and renders each book to the page
function displayBooks() {
  const displaySection = document.getElementById('book-cards');
  displaySection.innerHTML = '';
  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
            <h1>${book.title}</h1>
            <h2>by ${book.author}</h2>
            <p>${book.pages} pages</p>
            <button onclick="removeBook(${index})">Remove</button>
        `;
    displaySection.appendChild(bookCard);
  });
}

// removes book and knows what book to remove based off the index
function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

document.getElementById('newBookBtn').addEventListener('click', () => {
  document.getElementById('bookDialog').showModal();
});

document.getElementById('closeDialog').addEventListener('click', () => {
  document.getElementById('bookDialog').close();
});

// takes the input value of each input and uses it in the addbook fuction
document
  .getElementById('bookForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    addBookToLibrary(title, author, pages);
    document.getElementById('bookDialog').close();
    this.reset();
  });
