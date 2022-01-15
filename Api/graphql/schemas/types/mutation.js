const mutation = `
{
    registerUser(
        user: UserInput!            
    ): User,
    addCity(
        city: CityInput!
    ): City,
 
}
`;

module.exports = mutation;
