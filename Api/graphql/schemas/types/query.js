const query = `
{
    hello: String!,
    sayHello (name: String!): String!,
    sayHello2 (user: UserInput!): String!,
}
`;

module.exports = query;
