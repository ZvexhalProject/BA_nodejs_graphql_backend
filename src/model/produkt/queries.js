const { GraphQLList,
        GraphQLID,
        GraphQLString,
        GraphQLFloat,
        GraphQLInt } = require('graphql')
const type = require('./type')
const mutation = require('./mutations')
const Produkt = require("./produkt")

// Defines the queries
module.exports = {
   
    produkte: {
        type: new GraphQLList(type),
        args: {

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

        },
        resolve: Produkt.findMatching.bind(Produkt)
    },
    produkt: {
        type,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve: Produkt.getByID.bind(Produkt)
    }
}



