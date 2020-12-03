const { 
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLFloat,
    GraphQLInt
} = require('graphql')
const type = require('./type').default
const ZGruppenuserMapping = require('./zgrpusermapping')

// Defines the mutations
module.exports = {
    addzgrpusermapping: {
        type,
        args: {
            gruppeid:   { type: new GraphQLNonNull(GraphQLID) },
            userid:  { type: new GraphQLNonNull(GraphQLID) },
        },
        resolve: ZGruppenuserMapping.createEntry.bind(ZGruppenuserMapping)
    },
    updatezgrpusermapping: {
        type,
        args: {
            gruppeid:   { type: GraphQLID },
            userid:   {type: GraphQLID}
        },
        resolve: ZGruppenuserMapping.updateEntry.bind(ZGruppenuserMapping)
    }
}
