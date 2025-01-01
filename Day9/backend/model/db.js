const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  publishedYear: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: true,
    trim: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the model from the schema
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
