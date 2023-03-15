import { gql } from '@apollo/client';

export const GET_FEEDBACKS = gql`
  query GetFeedbacks {
    feedbacks {
      _id
      review
      rating
      city
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

export const GET_DEPARTMENTS = gql`
  query GetDepartments {
    departments {
        _id
        name 
        officers
    }
  }
`;

export const GET_DEPARTMENT_BY_ID = gql`
query GetDepartmentByID($departmenId: ID!) {
    department(departmentId: $departmentId) {
        _id
        name
        officers
    }
}
`;

export const GET_OFFICERS = gql`
  query GetOfficers {
    officers {
      name
      officerId
      position
      ratings {
        rating
        review
      }
    }
  }`
  ;

export const GET_OFFICERS_BY_ID = gql`
query GetOfficerByID($officerId: Int!) {
  officer(officerId: $officerId) {
    name
    officerId
    position
    ratings {
      rating
      review
    }
  }
}`
  ;