const { 
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLFloat,
    GraphQLInt
} = require('graphql')
const type = require('./type')
const User = require('./user')

// Defines the mutations
module.exports = {
    addUser: {
        type,
        /* 
        username,
                    userpasswort,
                    thema,
                    kreiert,
                    letzterlogin,
                    sprache,
                    barrieremodus*/
        args: {
            username:   { type: new GraphQLNonNull(GraphQLString) },
            userpasswort:  { type: new GraphQLNonNull(GraphQLString) },
            thema: { type: new GraphQLNonNull(GraphQLInt) },
            kreiert: { type: new GraphQLNonNull(GraphQLString) },
            letzterlogin: { type: new GraphQLNonNull(GraphQLString) },
            sprache: { type: new GraphQLNonNull(GraphQLString) },
            barrieremodus: { type: new GraphQLNonNull(GraphQLInt) }

        },
        resolve: User.createEntry.bind(User)
    },
    updateUser: {
        type,
        args: {
            id:     { type: GraphQLID },
            username: { type: new GraphQLNonNull(GraphQLString) },
            userpasswort:  { type: new GraphQLNonNull(GraphQLString) },
            thema: { type: new GraphQLNonNull(GraphQLInt) },
            kreiert: { type: new GraphQLNonNull(GraphQLString) },
            letzterlogin: { type: new GraphQLNonNull(GraphQLString) },
            sprache: { type: new GraphQLNonNull(GraphQLString) },
            barrieremodus: { type: new GraphQLNonNull(GraphQLInt) }
        },
        resolve: User.updateEntry.bind(User)
    }
}
