const express = require("express");
const bookController = require("../controller/bookController");

const router = express.Router();

router.get("/books", bookController.getAllBooks);
router.get("/books/:id", bookController.findBookById);
router.post("/books", bookController.addBook); 
router.patch("/books/:id", bookController.updateBook); 
router.delete("/books/:id",bookController.deleteBook);

module.exports = router;