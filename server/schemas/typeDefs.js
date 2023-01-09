const {gql} = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount: String
    savedBooks: [Book]
}

type Book {
    bookId: ID
    authors: [String]
    title: String
    description: String
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}
type Query {
    me: User
    users: [User]
    user(username: String!): User
    books: [Book]
    book(title: String!): Book
    savedBooks(username: String!): Book
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(author: String!, description: String!, title: String!, bookId: String!, image: String, link: String): User
    removeBook(bookId: String!): User
}

`;

module.exports = typeDefs; 