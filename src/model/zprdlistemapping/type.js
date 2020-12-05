let { GraphQLID, GraphQLString, GraphQLFloat, GraphQLObjectType, GraphQLNonNull, GraphQLList, GraphQLInt } = require('graphql')
const Liste = require("../liste/type")
const Produkt = require("../produkt/type")

// Defines the type
module.exports = new GraphQLObjectType({
    name: 'ZProduktlisteMapping',
    description: 'Mapping Produkt:Liste',
    fields: {
        id: {
            type: GraphQLID
        },
        listeid: {
            type: GraphQLID
        },
        produktid: {
            type: GraphQLID
        },
        produkt: {
            type: Produkt
        },
        liste: {
            type: Liste
        }
        }
})