const query = `
{
    hello: String!,
    sayHello (name: String!): String!,
    sayHello2 (user: UserInput!): String!,
    loginUser (email: String!, password: String!): String!,
    cities: [City!]!,
    city (id: ID!): City!,    
}
`;

module.exports = query;
