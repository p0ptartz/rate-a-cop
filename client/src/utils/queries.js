import { gql } from '@apollo/client';

export const GET_FEEDBACKS = gql`
  query GetFeedbacks {
    feedbacks {
      _id
      review
      rating
    }
  }
`;

export const GET_FEEDBACK_BY_ID = gql`
  query GetFeedbackById($feedbackId: ID!) {
    feedback(feedbackId: $feedbackId) {
      _id
      review
      rating
    }
  }
`;

export const GET_LOCATIONS = gql`
query GetLocations {
  locations {
    _id
    review
    rating
  }
}
`;

export const GET_LOCATIONS_BY_ID = gql`
query GetLocationById($locationId: ID!){
  location(locationId: $locationId){
    _id
    review
    rating
  }
}
`

