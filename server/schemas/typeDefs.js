const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Location {
        _id: ID,
        name: String!
        departments: [Department]
        officers: [Officer]
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
        officerId: INT
        ratings: [Rating]
    }

    type Feedback {
        _id: ID
        review: String
        rating: INT
    }

    type User {
        _id: ID
        username: String!
        password: String!
        ratings: [Rating]
    }

    type Query {
        feedbacks: [Feedback]!
        feedback(feedbackId: ID!): Feedback

    }

    type Mutation {
        login:
        addFeedback:
        addOfficer:
        addDepartment:
        addLocation:
        removeFeedback
    }
`

module.exports = typeDefs;