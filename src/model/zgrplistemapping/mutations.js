const { 
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLFloat,
    GraphQLInt
} = require('graphql')
const type = require('./type')
const ZGruppenlisteMapping = require('./zgrplistemapping')

// Defines the mutations
module.exports = {
    addzgrplistemapping: {
        type,
        args: {
            listeid:   { type: new GraphQLNonNull(GraphQLID) },
            gruppeid:  { type: new GraphQLNonNull(GraphQLID) },
        },
        resolve: ZGruppenlisteMapping.createEntry.bind(ZGruppenlisteMapping)
    },
    updatezgrplistemapping: {
        type,
        args: {
            id:   {type: GraphQLID},
            listeid:   {type: GraphQLID},
            gruppeid:   {type: GraphQLID}
        },
        resolve: ZGruppenlisteMapping.updateEntry.bind(ZGruppenlisteMapping)
    },
    deletezgrplistemapping: {
        type,
        args: {
            id:     { type: GraphQLID },
        },
        resolve: ZGruppenlisteMapping.deleteEntry.bind(ZGruppenlisteMapping)
    }
}
