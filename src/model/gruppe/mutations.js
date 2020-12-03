const { 
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLFloat,
    GraphQLInt
} = require('graphql')
const type = require('./type')
const Gruppe = require('./gruppe')

// Defines the mutations
module.exports = {
    addGruppe: {
        type,
       
        args: {
            haushaltsname:   { type: new GraphQLNonNull(GraphQLString) },
            haushaltspasswort:  { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve: Gruppe.createEntry.bind(Gruppe)
    },
    updateGruppe: {
        type,
        args: {
            id:     { type: GraphQLID },
            haushaltsname:   { type: new GraphQLNonNull(GraphQLString) },
            haushaltspasswort:  { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve: Gruppe.updateEntry.bind(Gruppe)
    },
    deleteGruppe: {
        type,
        args: {
            id:     { type: GraphQLID },
        },
        resolve: Gruppe.deleteEntry.bind(Gruppe)
    }
}
