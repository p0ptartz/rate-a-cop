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

module.exports = {
    GET_FEEDBACKS,
    GET_FEEDBACK_BY_ID,
};