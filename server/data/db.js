const Book = require("../models/Book");
const Author = require("../models/Author");
const Vote = require("../models/Vote");
const mongoDataMethods = {
  getAllBooks: async (condition = null) => (condition === null ? await Book.find() : await Book.find(condition)),
  getBookById: async (id) => await Book.findById(id),
  getAllAuthors: async () => await Author.find(),
  getAllVotes: async () => await Vote.find(),
  getVoteById: async (id) => await Vote.findById(id),
  getAuthorById: async (id) => await Author.findById(id),
  createAuthor: async (args) => {
    const newAuthor = new Author(args);
    return await newAuthor.save();
  },
  createBook: async (args) => {
    const newBook = new Book(args);
    return await newBook.save();
  },
  createVote: async (args) => {
    const newVote = new Vote(args);
    return await newVote.save();
  },
};

module.exports = mongoDataMethods;
