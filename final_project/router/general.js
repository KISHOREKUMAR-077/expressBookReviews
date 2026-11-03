const express = require('express');
const axios = require('axios');

const public_users = express.Router();

const BOOKS_API_URL = 'https://openlibrary.org';

// 1. Get all books
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

// 2. Get book by ISBN
public_users.get('/isbn/:isbn', async (req, res) => {
    try {
        const isbn = req.params.isbn;

        const response = await axios.get(
            `${BOOKS_API_URL}/search.json?isbn=${isbn}`
        );

        if (response.data.docs.length > 0) {
            return res.status(200).json(response.data.docs[0]);
        }

        res.status(404).json({ message: 'Book not found' });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching book' });
    }
});

// 3. Get books by author
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

// 4. Get books by title
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

// 5. Get reviews by ISBN
public_users.get('/review/:isbn', async (req, res) => {
    try {
        const isbn = req.params.isbn;

        const response = await axios.get(
            `${BOOKS_API_URL}/search.json?isbn=${isbn}`
        );

        if (response.data.docs.length > 0) {
            return res.status(200).json(response.data.docs[0]);
        }

        res.status(404).json({ message: 'Book not found' });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching book' });
    }
});

module.exports.general = public_users;
