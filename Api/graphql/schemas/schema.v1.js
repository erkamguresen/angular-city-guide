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
input UserInput {
    username: String!,
    email: String!,
    password: String!,
}
`);

module.exports = schema;
