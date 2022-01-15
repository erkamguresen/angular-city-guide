const { buildSchema } = require('graphql');
const mutation = require('./types/mutation');
const query = require('./types/query');

const schema = buildSchema(`
type Query ${query},
type Mutation ${mutation},
type User {        
    username: String!,
    email: String!,
    password: String!,
}
type City {   
    id: ID!,     
    name: String!,
    description: String!,
    country: String!,
    countryCode: String!,
    createdAt: String!,
    updatedAt: String!,
    userId: Int!,
    url: String!,
}
input UserInput {
    username: String!,
    email: String!,
    password: String!,
    firstName: String,
    lastName: String,
    birthday: String,
    isAdmin: Boolean
}
`);

module.exports = schema;
