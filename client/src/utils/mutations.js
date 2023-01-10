import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const SAVE_BOOK = gql`
  mutation saveBook($id: ID!, $authors: [String]!, $title: String, $description: String, $image: String, $link: String) {
    saveBook(bookId: $id, authors: $authors, title: $title, description: $desciption, image: $image, link: $link) {
      bookId
      authors
      title
      description
      image
      link
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($id: ID!) {
    removeBook(bookId: $id) {
      bookId
    }
  }
`;