const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Location {
    _id: ID
    name: String!
    departments: String!
    officers: String!
    city: String!
}

    type Department {
        _id: ID
        name: String!
        officers: [Officer]
    }

    type Officer {
        _id: ID
        name: String!
        position: String
        officerId: Int
        ratings: [Feedback]
    }

    type Feedback {
        _id: ID
        review: String
        rating: Int
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
        officer(officerId: Int!): Officer
    }

    type Mutation {
        addFeedback(review: String!, rating: Int!): Feedback

        addUser(username: String!, password: String!): User

        addOfficer(name: String!, position: String, officerId: Int): Officer

        addDepartment(name: String!): Department

        addLocation(name: String!, departments: String!, officers: String!, city: String!): Location

        removeFeedback: String!
    }
`

module.exports = typeDefs;