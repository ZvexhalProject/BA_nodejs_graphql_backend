const { GraphQLList,
        GraphQLID,
        GraphQLString,
        GraphQLFloat,
        GraphQLInt } = require('graphql')
const type = require('./type')
const mutation = require('./mutations')
const ZGruppenlisteMapping = require("./zgrplistemapping")

// Defines the queries
module.exports = {
    zgrplistemappings: {
        type: new GraphQLList(type),
        args: {
            listeid: {
                type: GraphQLID
            },
            gruppeid: {
                type: GraphQLID
            }
        },
        resolve: ZGruppenlisteMapping.findMatching.bind(ZGruppenlisteMapping)
    },
    zgrplistemapping: {
        type,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve: ZGruppenlisteMapping.getByID.bind(ZGruppenlisteMapping)
    }
}



