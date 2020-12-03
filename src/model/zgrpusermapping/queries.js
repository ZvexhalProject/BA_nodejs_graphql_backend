const { GraphQLList,
        GraphQLID,
        GraphQLString,
        GraphQLFloat,
        GraphQLInt } = require('graphql')
const type = require('./type')
const mutation = require('./mutations')
const ZGruppenuserMapping = require("./zgrpusermapping")

// Defines the queries
module.exports = {
    zgruppenusermappings: {
        type: new GraphQLList(type),
        args: {
            gruppeid: {
                type: GraphQLID
            },
            userid: {
                type: GraphQLID
            }
        },
        resolve: ZGruppenuserMapping.findMatching.bind(ZGruppenuserMapping)
    },
    zgruppenusermapping: {
        type,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve: ZGruppenuserMapping.getByID.bind(ZGruppenuserMapping)
    }
}



