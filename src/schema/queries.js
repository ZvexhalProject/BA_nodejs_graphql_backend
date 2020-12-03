const { GraphQLObjectType } = require('graphql')
const userQueries = require('../model/user/queries')
const gruppeQueries = require('../model/gruppe/queries')
const zgrpusermappingQueries = require('../model/zgrpusermapping/queries')


module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: userQueries.user,
        users: userQueries.users,
        gruppe: gruppeQueries.gruppe,
        gruppen: gruppeQueries.gruppen,
        zgrpusermapping: zgrpusermappingQueries.zgruppenusermapping,
        zgrpusermappings: zgrpusermappingQueries.zgruppenusermappings
    }
})