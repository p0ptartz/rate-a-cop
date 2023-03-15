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
  mutation AddOfficer($name: String!, $position: String!, $officerId: Int!, $ratings: String!) {
    addOfficer(name: $name, position: $position, officerId: $officerId, ratings: $ratings) {
      _id
      name
      position
      officerId
      ratings
    }
  }
`;

export const ADD_DEPARTMENT = gql`
  mutation AddDepartment($name: String!, $officers: String!) {
    addDepartment(name: $name, officers: $officers) {
      _id
      name
      officers
    }
  }
`;

export const ADD_LOCATION = gql`
  mutation AddLocation($name: String!, $departments: String!, $officers: String!) {
    addLocation(name: $name, departments: $departments, officers: $officers) {
      _id
      name
      departments
      officers
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

