const { 
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLFloat,
    GraphQLInt
} = require('graphql')
const type = require('./type')
const ZProduktlisteMapping = require('./zprdlistemapping')

// Defines the mutations
module.exports = {
    addzprdlistemapping: {
        type,
        args: {
            produktid:   { type: new GraphQLNonNull(GraphQLID) },
            liste:  { type: new GraphQLNonNull(GraphQLID) },
        },
        resolve: ZProduktlisteMapping.createEntry.bind(ZProduktlisteMapping)
    },
    updatezprdlistemapping: {
        type,
        args: {
            id:   {type: GraphQLID},
            produktid:   {type: GraphQLID},
            listeid:   {type: GraphQLID}
        },
        resolve: ZProduktlisteMapping.updateEntry.bind(ZProduktlisteMapping)
    },
    deletezprdlistemapping: {
        type,
        args: {
            id:     { type: GraphQLID },
        },
        resolve: ZProduktlisteMapping.deleteEntry.bind(ZProduktlisteMapping)
    }
}
