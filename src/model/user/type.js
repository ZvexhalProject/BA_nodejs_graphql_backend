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
    name: 'User',
    description: 'A User',
    fields: {
        id: {
            type: GraphQLID
        },
        username: {
            type: GraphQLString
        },
        userpasswort: {
            type: GraphQLString
        },
        thema: {
            type: GraphQLInt
        },
        kreiert: {
            type: GraphQLString
        },
        letzterlogin: {
            type: GraphQLString
        },
        sprache: {
            type: GraphQLString
        },
        barrieremodus: {
            type: GraphQLInt
        }
    }
})