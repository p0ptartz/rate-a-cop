const {gql} = require('apollo-server-express');

const typeDefs = gql`
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
        username: String!
        password: String!
        ratings: String!
    }

    type Query {
        feedbacks: String!
        feedback(feedbackId: ID!): String!

    }

    type Mutation {
        login: String!
        addFeedback: String!
        addUser: String!
        addOfficer: String!
        addDepartment: String!
        addLocation: String!
        removeFeedback: String!
    }
`

module.exports = typeDefs;