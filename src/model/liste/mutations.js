const { 
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLFloat,
    GraphQLInt
} = require('graphql')
const type = require('./type')
const Liste = require('./liste')

// Defines the mutations
module.exports = {
    addListe: {
        type,
        args: {
            listenname:   { type: new GraphQLNonNull(GraphQLString) },
            listenpasswort:  { type: new GraphQLNonNull(GraphQLString) },
            icon: { type: new GraphQLNonNull(GraphQLInt) },
            letzteredit: { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve: Liste.createEntry.bind(Liste)
    },
    updateListe: {
        type,
        args: {
            id:     { type: GraphQLID },
            listenname:   { type: new GraphQLNonNull(GraphQLString) },
            listenpasswort:  { type: new GraphQLNonNull(GraphQLString) },
            icon: { type: new GraphQLNonNull(GraphQLInt) },
            letzteredit: { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve: Liste.updateEntry.bind(Liste)
    },
    deleteListe: {
        type,
        args: {
            id:     { type: GraphQLID },
        },
        resolve: Liste.deleteEntry.bind(Liste)
    }
}
