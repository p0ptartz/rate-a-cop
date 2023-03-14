const { gql } = require('apollo-server-express');

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
        officerId: Int
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
        ratings: [Feedback]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        feedbacks: [Feedback]
        feedback(feedbackId: ID!): String!
        users: [User]
        locations: [Location]
        departments: [Department]
        officers: [Officer]
    }

    type Mutation {
        addFeedback(review: String!, rating: Int!): Feedback
        addUser(username: String!, password: String!): User
        addOfficer(name: String!, position: String!, officerId: Int, ratings: String!): Officer
        addDepartment(name: String!, officers: String!): Department
        addLocation(name: String!, departments: String!, officers: String!): Location
        removeFeedback: String!
    }
`

module.exports = typeDefs;