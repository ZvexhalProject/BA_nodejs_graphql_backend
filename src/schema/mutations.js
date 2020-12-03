const { GraphQLObjectType } = require('graphql')
const userMutation = require('../model/user/mutations')
const gruppeMutation = require('../model/gruppe/mutations')
const zgrpusermappingMutation = require('../model/zgrpusermapping/mutations')
//zgrpusermapping

module.exports = new GraphQLObjectType({
    name: 'RootMutationsType',
    fields: {
        addUser: userMutation.addUser,
        updateUser: userMutation.updateUser,
        addGruppe: gruppeMutation.addGruppe,
        updateGruppe: gruppeMutation.updateGruppe,
        deleteGruppe: gruppeMutation.deleteGruppe,
        // addzgrpusermapping: zgrpusermappingMutation.addzgrpusermapping,
        // updatezgrpusermapping: zgrpusermappingMutation.updatezgrpusermapping
    }
})