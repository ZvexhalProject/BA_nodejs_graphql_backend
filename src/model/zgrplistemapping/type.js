let { GraphQLID, GraphQLString, GraphQLFloat, GraphQLObjectType, GraphQLNonNull, GraphQLList, GraphQLInt } = require('graphql')
const Liste = require("../liste/type")
const Gruppe = require("../gruppe/type")

// Defines the type
module.exports = new GraphQLObjectType({
    name: 'ZGruppenlisteMapping',
    description: 'Mapping Gruppe:Liste',
    fields: {
        id: {
            type: GraphQLID
        },
        listeid: {
            type: GraphQLID
        },
        gruppeid: {
            type: GraphQLID
        },
        liste: {
            type: Liste
        },
        gruppe: {
            type: Gruppe
        }
        }
})