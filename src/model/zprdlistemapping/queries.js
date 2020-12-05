const { GraphQLList,
        GraphQLID,
        GraphQLString,
        GraphQLFloat,
        GraphQLInt } = require('graphql')
const type = require('./type')
const mutation = require('./mutations')
const ZProduktlisteMapping = require("./zprdlistemapping")

// Defines the queries
module.exports = {
    zprdlistemappings: {
        type: new GraphQLList(type),
        args: {
            produktid: {
                type: GraphQLID
            },
            listeid: {
                type: GraphQLID
            }
        },
        resolve: ZProduktlisteMapping.findMatching.bind(ZProduktlisteMapping)
    },
    zprdlistemapping: {
        type,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve: ZProduktlisteMapping.getByID.bind(ZProduktlisteMapping)
    }
}



