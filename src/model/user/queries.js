const { GraphQLList,
        GraphQLID,
        GraphQLString,
        GraphQLFloat,
        GraphQLInt } = require('graphql')
const type = require('./type')
const mutation = require('./mutations')
const User = require("./user")

// Defines the queries
module.exports = {
    /*username,
                    userpasswort,
                    thema,
                    kreiert,
                    letzterlogin,
                    sprache,
                    barrieremodus */
    users: {
        type: new GraphQLList(type),
        args: {
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
        },
        resolve: User.findMatching.bind(User)
    },
    user: {
        type,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve: User.getByID.bind(User)
    }
}



