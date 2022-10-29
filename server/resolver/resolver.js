const resolvers = {
  // QUERY
  Query: {
    books: async (parent, args, { mongoDataMethods }) => await mongoDataMethods.getAllBooks(),
    book: async (parent, { id }, { mongoDataMethods }) => await mongoDataMethods.getBookById(id),
    authors: async (parent, args, { mongoDataMethods }) => await mongoDataMethods.getAllAuthors(),
    author: async (parent, { id }, { mongoDataMethods }) => await mongoDataMethods.getAuthorById(id),
    votes: async (parent, args, { mongoDataMethods }) => await mongoDataMethods.getAllVotes(),
    vote: async (parent, { id }, { mongoDataMethods }) => {
      const vote = await mongoDataMethods.getVoteById(id);
      return vote;
    },
  },

  Book: {
    author: async ({ authorId }, args, { mongoDataMethods }) => await mongoDataMethods.getAuthorById(authorId),
    review: async ({ id }, args, { mongoDataMethods }) => {
      const vote = await mongoDataMethods.getAllVotes({ bookId: id });
      return vote;
    },
  },

  Author: {
    books: async ({ id }, args, { mongoDataMethods }) => {
      const books = await mongoDataMethods.getAllBooks({ authorId: id });
      console.log(books);
      return books;
    },
  },
  Vote: {
    books: async ({ bookId }, args, { mongoDataMethods }) => {
      const book = await mongoDataMethods.getBookById(bookId);
      // convert to array
      return [book];
    },
  },
  // MUTATION
  Mutation: {
    createAuthor: async (parent, args, { mongoDataMethods }) => await mongoDataMethods.createAuthor(args),
    createBook: async (parent, args, { mongoDataMethods }) => await mongoDataMethods.createBook(args),
    createVote: async (parent, args, { mongoDataMethods }) => {
      const newVote = await mongoDataMethods.createVote(args);
      return newVote;
    },
  },
};

module.exports = resolvers;
