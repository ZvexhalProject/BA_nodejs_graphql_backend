let {
    GraphQLID,
    GraphQLString, 
    GraphQLObjectType  
} = require('graphql')

// Defines the type
module.exports = new GraphQLObjectType({
    name: 'Gruppe',
    description: 'A Group',
    fields: {
        id: {
            type: GraphQLID
        },
        haushaltsname: {
            type: GraphQLString
        },
        haushaltspasswort: {
            type: GraphQLString
        },
    }
})