let { GraphQLID, GraphQLString, GraphQLFloat, GraphQLObjectType, GraphQLNonNull, GraphQLList, GraphQLInt } = require('graphql')
const User = require("../user/type")
const Gruppe = require("../gruppe/type")

// Defines the type
module.exports = new GraphQLObjectType({
    name: 'ZGruppenuserMapping',
    description: 'Mapping User:Gruppe',
    fields: {
        id: {
            type: GraphQLID
        },
        gruppeid: {
            type: GraphQLID
        },
        userid: {
            type: GraphQLID
        },
        user: {
            type: User
        },
        gruppe: {
            type: Gruppe
        }
    }
})