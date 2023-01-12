import { gql } from '@apollo/client';

export const QUERY_BOOKS = gql`
  query books($username: String) {
    books(username: $username) {
      bookId
      title
      createdAt
      username
      description
      author
    }
  }
`;

export const QUERY_BOOK = gql`
  query book($id: ID!) {
    thought(bookId: $id) {
      bookId
      title
      createdAt
      username
      description
      author
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      savedBooks
    }
  }
`;

export const GET_ME = gql`
 {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        title
        authors
        description
        image
        link
      }
    }
  }
`;