let {
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInt
    
} = require('graphql')

// Defines the type
module.exports = new GraphQLObjectType({
    name: 'Produkt',
    description: 'A product',
    fields: {
        id: {
            type: GraphQLID
        },
        produktcode: {
            type: GraphQLString
        },
        produktname: {
            type: GraphQLString
        },
        gewicht: {
            type: GraphQLInt
        },
        einheit: {
            type: GraphQLString
        },
        menge: {
            type: GraphQLInt
        },
        produkticon: {
            type: GraphQLInt
        },
        kategorie: {
            type: GraphQLString
        },
        mindesthaltbarkeit: {
            type: GraphQLString
        },
        bemerkung: {
            type: GraphQLString
        }
    }
})