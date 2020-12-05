const { GraphQLObjectType } = require('graphql')
const userQueries = require('../model/user/queries')
const gruppeQueries = require('../model/gruppe/queries')
const zgrpusermappingQueries = require('../model/zgrpusermapping/queries')
const zgrlistemappingQueries = require('../model/zgrplistemapping/queries')
const zgrproduktmappingQueries = require('../model/zprdlistemapping/queries')
const listeQueries = require('../model/liste/queries')
const produktQueries = require('../model/produkt/queries')



module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: userQueries.user,
        users: userQueries.users,
        gruppe: gruppeQueries.gruppe,
        gruppen: gruppeQueries.gruppen,
        zgrpusermapping: zgrpusermappingQueries.zgrpusermapping,
        zgrpusermappings: zgrpusermappingQueries.zgrpusermappings,
        liste: listeQueries.liste,
        listen: listeQueries.listen,
        zgrlistemapping: zgrlistemappingQueries.zgrplistemapping,
        zgrlistemappings: zgrlistemappingQueries.zgrplistemappings,
        produkt: produktQueries.produkt,
        produkte: produktQueries.produkte,
        zprdlistemapping: zgrproduktmappingQueries.zprdlistemapping,
        zprdlistemappings:zgrproduktmappingQueries.zprdlistemappings
    }
})