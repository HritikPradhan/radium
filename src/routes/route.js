const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController");
const MyBookController = require('../controllers/MyBookController')
const MyAuthorController = require('../controllers/MyAuthorController');
const MyAuthorModel = require('../models/MyAuthorModel');


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

// Authors API
router.post('/authors',  authorController.createAuthor  );
router.get('/authors',  authorController.getAuthors  );

// Books API
router.post('/books',  BookController.createBook  );
router.get('/books',  BookController.getBooks  );
router.get('/book',  BookController.getBook  );

//ref and populate assignment
router.post('/pushbook', MyBookController.pushbook);
router.get('/myBooks', MyBookController.myBooks);
router.post('/pushauthor', MyAuthorController.pushauthor);
router.post('/createbook',MyBookController.createbook);
router.post('/publisher',MyBookController.publisher);


module.exports = router;