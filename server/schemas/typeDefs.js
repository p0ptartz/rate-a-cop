const {gql} = require('apollo-server-express');

const typeDefs = gql`
    scalar StringOrInt
    type Location {
        _id: ID
        name: String!
        departments: String!
        officers: String!
    }

    type Department {
        _id: ID
        name: String!
        officers: String!
    }

    type Officer {
        _id: ID
        name: String!
        position: String!
        officerId: Int!
        ratings: String!
    }

    type Feedback {
        _id: ID
        review: String!
        rating: Int!
    }

    type User {
        _id: ID
        username: StringOrInt!
        password: StringOrInt!
        ratings: StringOrInt!
    }

    type Query {
        feedbacks: String!
        feedback(feedbackId: ID!): String!

    }

    type Mutation {
        login: String!
        signup: String!
        addFeedback(review: String!, rating: Int!): Feedback
        addUser: String!
        addOfficer: String!
        addDepartment(name: String!, officers: String!): Department
        addLocation(name: String!, departments: String!, officers: String!): Location
        removeFeedback(feedbackId: ID!): Feedback
    }
`

module.exports = typeDefs;