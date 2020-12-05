const { GraphQLList,
        GraphQLID,
        GraphQLString,
        GraphQLFloat,
        GraphQLInt } = require('graphql')
const type = require('./type')
const mutation = require('./mutations')
const Liste = require("./liste")

// Defines the queries
module.exports = {
    liste: {
        type: new GraphQLList(type),
        args: {
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
            }
        },
        resolve: Liste.findMatching.bind(Liste)
    },
    listen: {
        type,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve: Liste.getByID.bind(Liste)
    }
}



