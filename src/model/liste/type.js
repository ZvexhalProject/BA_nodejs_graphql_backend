let {
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInt
    
} = require('graphql')

// Defines the type
module.exports = new GraphQLObjectType({
    name: 'Liste',
    description: 'A List',
    fields: {
        id: {
            type: GraphQLID
        },
        listenname: {
            type: GraphQLString
        },
        listenpasswort: {
            type: GraphQLString
        },
        icon: {
            type: GraphQLInt
        },
        letzteredit: {
            type: GraphQLString
        },
    }
})