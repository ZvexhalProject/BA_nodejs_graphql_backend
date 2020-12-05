const { GraphQLObjectType } = require('graphql')
const userMutation = require('../model/user/mutations')
const gruppeMutation = require('../model/gruppe/mutations')
const zgrpusermappingMutation = require('../model/zgrpusermapping/mutations')
const zgrplistemappingMutation = require('../model/zgrplistemapping/mutations')
const zprdlistemappingMutation = require('../model/zprdlistemapping/mutations')
const listeMutation = require('../model/liste/mutations')
const produktMutation = require('../model/produkt/mutations')



module.exports = new GraphQLObjectType({
    name: 'RootMutationsType',
    fields: {
        addUser: userMutation.addUser,
        updateUser: userMutation.updateUser,
        deleteUser: userMutation.deleteUser,
        addGruppe: gruppeMutation.addGruppe,
        updateGruppe: gruppeMutation.updateGruppe,
        deleteGruppe: gruppeMutation.deleteGruppe,
        addzgrpusermapping: zgrpusermappingMutation.addzgrpusermapping,
        updatezgrpusermapping: zgrpusermappingMutation.updatezgrpusermapping,
        deletezgrpusermapping: zgrpusermappingMutation.deletezgrpusermapping,
        addListe: listeMutation.addListe,
        updateListe: listeMutation.updateListe,
        deleteListe: listeMutation.deleteListe,
        addzgrplistemapping: zgrplistemappingMutation.addzgrplistemapping,
        updatezgrplistemapping: zgrplistemappingMutation.updatezgrplistemapping,
        deletezgrplistemapping: zgrplistemappingMutation.deletezgrplistemapping,
        addProdukt: produktMutation.addProdukt,
        updateProdukt: produktMutation.updateProdukt,
        deleteProdukt: produktMutation.deleteProdukt,
        addzprdlistemapping: zprdlistemappingMutation.addzprdlistemapping,
        updatezprdlistmapping: zprdlistemappingMutation.updatezprdlistemapping,
        deletezprdlistmapping: zprdlistemappingMutation.deletezprdlistemapping
    }
})