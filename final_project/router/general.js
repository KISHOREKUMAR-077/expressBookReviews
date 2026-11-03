
const express = require('express');
const books = require('../booksdb.js');

const public_users = express.Router();

// 1. Get all books
public_users.get('/', (req, res) => {
    res.status(200).json(books);
});

// 2. Get book by ISBN
public_users.get('/isbn/:isbn', (req, res) => {
    const isbn = req.params.isbn;

    if (books[isbn]) {
        return res.status(200).json(books[isbn]);
    }

    res.status(404).json({ message: 'Book not found' });
});

// 3. Get books by author
public_users.get('/author/:author', (req, res) => {
    const author = req.params.author.toLowerCase();

    const result = Object.values(books).filter(book =>
        book.author.toLowerCase() === author
    );

    res.status(200).json(result);
});

// 4. Get books by title
public_users.get('/title/:title', (req, res) => {
    const title = req.params.title.toLowerCase();

    const result = Object.values(books).filter(book =>
        book.title.toLowerCase() === title
    );

    res.status(200).json(result);
});

// 5. Get reviews by ISBN
public_users.get('/review/:isbn', (req, res) => {
    const isbn = req.params.isbn;

    if (books[isbn]) {
        return res.status(200).json(books[isbn].reviews || {});
    }

    res.status(404).json({ message: 'Book not found' });
});

module.exports.general = public_users;
