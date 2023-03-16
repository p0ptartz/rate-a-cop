const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Location {
        _id: ID
        name: String
        departments: String
        officers: [Officer]
        city: String!
        searchQuery: String
        ratings: [Feedback]
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
        review: String!
        rating: Int!
        officer: Officer!
        city: Location!
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
        addFeedback(review: String!, rating: Int!, city: String): Feedback

        addUser(username: String!, password: String!): User

        addOfficer(name: String!, position: String, officerId: Int): Officer

        addDepartment(name: String!): Department

        addLocation(city: String!, searchQuery: String): Location

        removeFeedback: String!
    }
`

module.exports = typeDefs;