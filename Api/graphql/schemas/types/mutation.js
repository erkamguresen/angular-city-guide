const mutation = `
{
    createUser(
        username: String!, 
        email: String!, 
        password: String!            
        ): User,
}
`;

module.exports = mutation;
