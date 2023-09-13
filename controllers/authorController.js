const Author = require("../models/author");
const asyncHandler = require("express-async-handler");
const Book = require("../models/author");

exports.author_list = asyncHandler(async (req, res, next) => {
  const allAuthors = await Author.find().sort({ family_name: 1 }).exec();

  res.render("author_list", {
    title: "Author List",
    author_list: allAuthors,
  });
});

exports.author_detail = asyncHandler(async (req, res, next) => {
  const [author, allBooksByAuthors] = await Promise.all([
    Author.findById(req.params.id).exec(),
    Book.find({ genre: req.params.id }, "title summary").exec(),
  ]);
  if (author === null) {
    const err = new Error("Author not found");
    err.status = 404;
    return next(err);
  }
  res.render("author_detail", {
    title: "Author Detail",
    author: author,
    author_books: allBooksByAuthors,
  });
});

exports.author_create_get = asyncHandler(async (req, res, next) => {
  res.send(`not implemented: author create GET`);
});

exports.author_create_post = asyncHandler(async (req, res, next) => {
  res.send(`not implemented: author create POST`);
});

exports.author_delete_get = asyncHandler(async (req, res, next) => {
  res.send(`not implemented: author delete GET`);
});

exports.author_delete_post = asyncHandler(async (req, res, next) => {
  res.send(`not implemented: author delete POST`);
});

exports.author_update_get = asyncHandler(async (req, res, next) => {
  res.send(`not implemented: author update GET`);
});

exports.author_update_post = asyncHandler(async (req, res, next) => {
  res.send(`not implemented: author update POST`);
});
