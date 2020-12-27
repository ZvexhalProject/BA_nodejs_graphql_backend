const { 
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLFloat,
    GraphQLInt,

} = require('graphql')
const type = require('./type')
const Produkt = require('./produkt')

// Defines the mutations
module.exports = {
    addProdukt: {
        type,
       //produktcode, produktname, gewicht, einheit, menge, produkticon, kategorie, mindesthaltbarkeit, bemerkung
        args: {
            produktcode:   { type: GraphQLString },
            produktname:  { type: new GraphQLNonNull(GraphQLString) },
            gewicht: { type: GraphQLInt },
            einheit: { type: GraphQLString },
            menge: { type: new GraphQLNonNull(GraphQLInt) },
            produkticon: { type: new GraphQLNonNull(GraphQLInt) },
            kategorie: { type: new GraphQLNonNull(GraphQLString) },
            mindesthaltbarkeit: { type: GraphQLString },
            bemerkung: { type: GraphQLString},
        },
        resolve: Produkt.createEntry.bind(Produkt)
    },
    updateProdukt: {
        type,
        args: {
            id:     { type: GraphQLID },
            produktcode:   { type: GraphQLString },
            produktname:  { type: new GraphQLNonNull(GraphQLString) },
            gewicht: { type: GraphQLInt },
            einheit: { type: GraphQLString },
            menge: { type: new GraphQLNonNull(GraphQLInt) },
            produkticon: { type: new GraphQLNonNull(GraphQLInt) },
            kategorie: { type: new GraphQLNonNull(GraphQLString) },
            mindesthaltbarkeit: { type: GraphQLString },
            bemerkung: { type: GraphQLString },
        },
        resolve: Produkt.updateEntry.bind(Produkt)
    },
    deleteProdukt: {
        type,
        args: {
            id:     { type: GraphQLID },
        },
        resolve: Produkt.deleteEntry.bind(Produkt)
    }
}
