const express = require('express');
const axios = require('axios');
const books = require('../booksdb.js');

const public_users = express.Router();

const BOOKS_API_URL = 'https://openlibrary.org';

public_users.get('/', async (req, res) => {
    try {
        const response = await axios.get(
            `${BOOKS_API_URL}/search.json?q=book`
        );

        res.status(200).json(response.data.docs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching books' });
    }
});

public_users.get('/isbn/:isbn', async (req, res) => {
    try {
        const isbn = req.params.isbn;

        const response = await axios.get(
            `${BOOKS_API_URL}/search.json?isbn=${encodeURIComponent(isbn)}`
        );

        if (response.data.docs.length > 0) {
            return res.status(200).json(response.data.docs[0]);
        }

        res.status(404).json({ message: 'Book not found' });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching book' });
    }
});

public_users.get('/author/:author', async (req, res) => {
    try {
        const author = req.params.author;

        const response = await axios.get(
            `${BOOKS_API_URL}/search.json?author=${encodeURIComponent(author)}`
        );

        res.status(200).json(response.data.docs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching books' });
    }
});

public_users.get('/title/:title', async (req, res) => {
    try {
        const title = req.params.title;

        const response = await axios.get(
            `${BOOKS_API_URL}/search.json?title=${encodeURIComponent(title)}`
        );

        res.status(200).json(response.data.docs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching books' });
    }
});

public_users.get('/review/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    if (books[isbn]) {
        return res.status(200).json(books[isbn].reviews || {});
    }

    res.status(404).json({ message: 'Book not found' });
});

module.exports.general = public_users;