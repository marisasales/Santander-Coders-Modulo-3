class BookList {
	constructor() {
		this.currentBook = undefined;
		this.nextBook = undefined;
		this.lastBook = undefined;
		this.allBooks = [];
		this.readBooks = [];
		this.unreadBooks = [];
		this.NumberOfReadBooks = 0;
		this.NumberOfUnreadBooks = 0;
	}

	add({ title, genre, author, read, readDate }) {
		for (const eachBook of this.allBooks) {
			if (eachBook.title === title) {
				return 'You have already registered this book';
			}
		}
		const book = new Book({ title, genre, author, read, readDate });
		this.allBooks = [...this.allBooks, book];

		if (book.read) {
			this.readBooks = [...this.readBooks, book];
			this.lastBook = book;
		} else {
			this.unreadBooks = [...this.unreadBooks, book];
		}

		this.NumberOfReadBooks = this.readBooks.length;
		this.NumberOfUnreadBooks = this.unreadBooks.length;
		return `${book.title} successfully registered!`;
	}

	setCurrentBook(title) {
		const upperCaseTitle = title.toUpperCase();
		const findBook = this.allBooks.find(
			(b) => b.title.toUpperCase() === upperCaseTitle
		);

		if (!findBook) {
			return `First you need to add "${title}" to the book list.`;
		}
		const book = findBook;

		if (this.currentBook === book) {
			return `You're already reading "${book.title}" since ${book.readDate}.`;
		}

		if (this.readBooks.includes(book)) {
			return `You already read "${book.title}" in ${book.readDate}.`;
		}

		book.read = true;
		book.readDate = new Date(Date.now());
		this.readBooks = [...this.readBooks, book];
		this.unreadBooks = this.unreadBooks.filter((b) => b !== book);
		this.NumberOfReadBooks = this.readBooks.length;
		this.NumberOfUnreadBooks = this.unreadBooks.length;
		this.currentBook = book;
		return `You started reading "${book.title}".`;
	}

	getCurrentBook() {
		return this.currentBook
			? `You\'re currently reading "${this.currentBook.title}".`
			: "You're not currently reading any books.";
	}

	finishCurrentBook() {
		if (!this.currentBook) {
			return "You don't have a current book.";
		}
		this.lastBook = this.currentBook;
		this.currentBook = undefined;
		return `You finished reading "${this.lastBook.title}"`;
	}

	getSuggestion() {
		this.nextBook = this.unreadBooks[0];
		return this.nextBook
			? `How about "${this.nextBook.title}" written by ${this.nextBook.author}?`
			: "We don't have any suggestions right now. Try again later.";
	}

	getLastBook() {
		return this.lastBook ? this.lastBook : "You haven't finished any book yet";
	}

	getUnreadBooks() {
		return this.unreadBooks.length > 0
			? this.unreadBooks
			: 'No unread books were found.';
	}

	getReadBooks() {
		return this.readBooks.length > 0
			? this.readBooks
			: 'No unread books were found.';
	}

	getBooksByAuthor(author) {
		const upperCaseEntry = author.toUpperCase();
		const byAuthor = this.allBooks.filter(
			(book) => book.author.toUpperCase() === upperCaseEntry
		);
		return byAuthor.length > 0 ? byAuthor : `Author ${author} not found.`;
	}

	getBooksByGenre(genre) {
		const upperCaseEntry = genre.toUpperCase();
		const byGenre = this.allBooks.filter(
			(book) => book.genre.toUpperCase() === upperCaseEntry
		);
		return byGenre.length > 0 ? byGenre : `Genre ${genre} not found.`;
	}

	getBooksByTitle(title) {
		const upperCaseEntry = title.toUpperCase();
		const byTitle = this.allBooks.filter(
			(book) => book.title.toUpperCase() === upperCaseEntry
		);
		return byTitle.length > 0 ? byTitle : `"${title}" not found.`;
	}

	getStatistics() {
		return `You have ${this.NumberOfReadBooks} finished books and ${this.NumberOfUnreadBooks} unfinished.`;
	}
}

class Book {
	constructor({ title, genre, author, read, readDate }) {
		this.title = title || 'Unknown title';
		this.genre = genre || 'Unknown genre';
		this.author = author || 'Unknown author';
		this.read = read || false;
		this.readDate = read ? new Date(readDate) : undefined;
	}
}

// Some Books
const library = new BookList();

library.add({
	title: "Harry Potter and the Philosopher's Stone",
	genre: 'Fantasy',
	author: 'J. K. Rowling',
	read: true,
	readDate: '02/08/2010',
});

library.add({
	title: 'Harry Potter and the Chamber of Secrets',
	genre: 'Fantasy',
	author: 'J. K. Rowling',
	read: true,
	readDate: '12/23/2010',
});

library.add({
	title: 'Harry Potter and the Prisoner of Azkaban',
	genre: 'Fantasy',
	author: 'J. K. Rowling',
});

library.add({
	title: 'The Shining',
	genre: 'Horror',
	author: 'Stephen King',
});
