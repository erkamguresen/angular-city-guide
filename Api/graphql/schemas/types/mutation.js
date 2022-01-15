const mutation = `
{
    createUser(
        user: UserInput!            
    ): User,
    addCity(
        city: CityInput!
    ): City,
 
}
`;

module.exports = mutation;
