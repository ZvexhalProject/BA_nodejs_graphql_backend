const DAO = require('../../lib/dao')
const mySQLWrapper = require('../../lib/mysqlWrapper')
const User = require('../user/user')
const Gruppe = require('../gruppe/gruppe')

class ZGruppenuserMapping extends DAO {

    /**
     * Overrides TABLE_NAME with this class' backing table at MySQL
     */
    static get TABLE_NAME() {
        return 'ZGruppenuserMapping'
    }

    /**
     * Returns a bacon by its ID
     */
    static async getByID(_, {id}) {
        let mappingByIdList=await this.find(id);
        //console.log(mappingByIdList);
        //console.log(this.mappit(_, mappingByIdList));
        return this.mappit(_, mappingByIdList);

        // return await this.find(id)
    }

    /**
     * Returns a list of bacons matching the passed fields
     * @param {*} fields - Fields to be matched
     */
    static async findMatching(_, fields) {

        // Returns early with all  if no criteria was passed
        if (Object.keys(fields).length === 0){
            let mappingList = await this.findAll();
            return this.mappit(_, mappingList);
        } 

        // Find matching 
        let mappingListMatching = await this.findByFields({fields});
        return this.mappit(_, mappingListMatching);
    }

    static async mappit(_, list){
       
        //console.log(Array.isArray(list));
        if(Array.isArray(list)){
            for(let i = 0; i < list.length; i++){
                list[i].user = await User.getByID(_,{id:list[i].userid})
                list[i].gruppe = await Gruppe.getByID(_,{id:list[i].gruppeid})
            } 
        } else {
                list.user = await User.getByID(_,{id:list.userid})
                list.gruppe = await Gruppe.getByID(_,{id:list.gruppeid})

        }
        return list;
    }


    /**
     * Creates a new bacon
     */
    static async createEntry(_, {gruppeid, userid}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {
            let _result = await this.insert(connection, {
                data: {
                    gruppeid,
                    userid
                }
            })

            return this.getByID(_, {id: _result.insertId})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }

    /**
     * Updates a bacon 
     */
    static async updateEntry(_, {id, gruppeid, userid}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {

            await this.update(connection, {
                id,
                data: {
                    gruppeid,
                    userid
                }
            })

            return this.getByID(_, {id})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }

    static async deleteEntry(_, {id}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {
            let deleted = await this.getByID(_, {id: id});
           // console.log({id});
            await this.delete(connection, {id: deleted.id})
            return deleted;      
        } catch (e){
            throw e;
        }
        finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }
}

module.exports = ZGruppenuserMapping