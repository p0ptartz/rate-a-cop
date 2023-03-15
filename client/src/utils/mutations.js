import { gql } from '@apollo/client';

export const ADD_FEEDBACK = gql`
  mutation AddFeedback($review: String!, $rating: Int!) {
    addFeedback(review: $review, rating: $rating) {
      _id
      review
      rating
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
  mutation AddLocation($name: String!, $departments: String!, $officers: String!, $city: String!) {
    addLocation(name: $name, departments: $departments, officers: $officers, city: $city) {
      _id
      name
      departments
      officers
      city
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

