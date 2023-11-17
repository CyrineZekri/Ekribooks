const asyncHandler = require("express-async-handler");
const Book = require("../models/book_model");

///////////////////////////////////// get All books  /////////////////////////////////////////////////
exports.getAllBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({ isRented: false });
  res.status(200).json(books);
});
///////////////////////////////////// get MY books  /////////////////////////////////////////////////
exports.getMyBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({ user: req.user._id });
  res.status(200).json(books);
});
///////////////////////////////////// Create a new book/////////////////////////////////////////////////
exports.createBook = asyncHandler(async (req, res) => {
  const { title, author, rentPrice } = req.body;

  // requirements
  if (!title || !author || !rentPrice) {
    res.status(400).json({ message: "Please include all fields" });
    return;
  }

  // To check if a book alr exists
  const bookExists = await Book.findOne({ title });
  if (bookExists) {
    res.status(400).json({ message: "Book already exists" });
    return;
  }

  // Create book
  const book = new Book({
    title,
    author,
    rentPrice,
    // image: req.file.path,
    //user: req.user._id
  });
  await book.save();
  res.status(201).json({
    _id: book._id,
    title: book.title,
    author: book.author,
    rentPrice: book.rentPrice,
    // image: book.image
  });
});

///////////////////////////////////// Update a book/////////////////////////////////////////////////
exports.updateBook = asyncHandler(async (req, res) => {
  const book = await Book.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  if (book) {
    res.status(200).json({ message: "Book updated successfully", book });
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

///////////////////////////////////// delete a book/////////////////////////////////////////////////
exports.deleteBook = asyncHandler(async (req, res) => {
  const result = await Book.deleteOne({ _id: req.params.id });
  if (result.deletedCount === 0) {
    return res.status(200).json({ message: "book not found" });
  } else {
    res.status(404).json({ message: "Book deleted " });
  }
});
