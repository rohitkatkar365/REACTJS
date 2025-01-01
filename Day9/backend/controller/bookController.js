const bookSchema = require("../model/db");
const mongoose = require("mongoose");

const getAllBooks = async (req, res) => {
  try {
    const data = await bookSchema.find();
    if (data.length === 0) {
      return res.status(404).json({ message: "No books found." });
    }
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error fetching books:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
  }
};

const findBookById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid ID format." });
    }

    const data = await bookSchema.findById(id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Book not found." });
    }

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error finding book:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
  }
};

const addBook = async (req, res) => {
  try {
    const data = new bookSchema(req.body);
    await data.save();
    res.status(201).json({ success: true, message: "Book added successfully", data });
  } catch (error) {
    console.error("Error adding book:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
  }
};

const updateBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid ID format." });
  }

  try {
    const data = await bookSchema.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!data) {
      return res.status(404).json({ success: false, message: "Book not found." });
    }

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error updating book:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid ID format." });
  }

  try {
    const data = await bookSchema.findByIdAndDelete(id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Book not found." });
    }

    res.status(200).json({ success: true, message: "Book deleted successfully", data });
  } catch (error) {
    console.error("Error deleting book:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
  }
};

module.exports = { getAllBooks, addBook, findBookById, updateBook, deleteBook };
