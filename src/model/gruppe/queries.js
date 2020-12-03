const { GraphQLList,
        GraphQLID,
        GraphQLString,
        GraphQLFloat,
        GraphQLInt } = require('graphql')
const type = require('./type')
const mutation = require('./mutations')
const Gruppe = require("./gruppe")

// Defines the queries
module.exports = {
    
    gruppen: {
        type: new GraphQLList(type),
        args: {
            haushaltsname: {
                type: GraphQLString
            },
            haushaltspasswort: {
                type: GraphQLString
            },
        },
        resolve: Gruppe.findMatching.bind(Gruppe)
    },
    gruppe: {
        type,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve: Gruppe.getByID.bind(Gruppe)
    }
}



