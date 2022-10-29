const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    id: ID
    name: String
    genre: String
    author: Author
    review: [Vote]
    slug: String
  }
  type Vote {
    id: ID
    rating: Int
    books: [Book]
  }

  type Author {
    id: ID!
    name: String
    age: Int
    books: [Book]
  }

  # ROOT TYPE
  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
    votes: [Vote]
    vote(id: ID!): Vote
  }

  type Mutation {
    createAuthor(name: String, age: Int): Author
    createBook(name: String, genre: String, authorId: ID!): Book
    createVote(rating: Int, bookId: ID!): Vote
  }
`;

module.exports = typeDefs;
