Express Book Reviews API

Project Description

This project is a Book Reviews API developed using Node.js and Express.js.

It allows users to retrieve book information, search for books by title, and view book reviews using ISBN numbers.

Technologies Used

- Node.js
- Express.js
- JavaScript
- Git and GitHub

Features

- Get all available books.
- Search books by ISBN.
- Search books by author.
- Search books by title.
- Get reviews for a particular book.
- Manage book reviews through API routes.

API Endpoints

Method| Endpoint| Description
GET| "/title/:title"| Search books by title
GET| "/review/:isbn"| Get reviews by ISBN

Installation

1. Clone this repository.

2. Install dependencies:
   
   npm install

3. Start the application:
   
   node index.js

Project Structure

expressBookReviews/
├── router/
│   ├── general.js
│   └── auth_users.js
├── index.js
├── package.json
└── README.md

Author

Kishore Kumar

GitHub: https://github.com/KISHOREKUMAR-077

License

This project is created for learning and educational purposes.