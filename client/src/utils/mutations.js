import { gql } from '@apollo/client';

export const ADD_FEEDBACK = gql`
  mutation AddFeedback($review: String!, $rating: Int!, $officer: String, $city: String) {
    addFeedback(review: $review, rating: $rating, officer: $officer, city: $city) {
      _id
      review
      rating
      city
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      _id
      username
      password
    }
  }
`;

export const ADD_OFFICER = gql`
  mutation AddOfficer($name: String!, $position: String, $officerId: Int) {
    addOfficer(name: $name, position: $position, officerId: $officerId) {
      _id
      name
      position
      officerId
    }
  }
`;

export const ADD_DEPARTMENT = gql`
  mutation AddDepartment($name: String!) {
    addDepartment(name: $name) {
      _id
      name
    }
  }
`;

export const ADD_LOCATION = gql`
  mutation AddLocation($city: String!, $name: String! $searchQuery: String) {
    addLocation(city: $city, name: $name, searchQuery: $searchQuery) {
      _id
      city
      searchQuery
    }
  }
`;


export const REMOVE_FEEDBACK = gql`
  mutation RemoveFeedback($feedbackId: ID!) {
    removeFeedback(feedbackId: $feedbackId) {
      _id
    }
  }
`;

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

