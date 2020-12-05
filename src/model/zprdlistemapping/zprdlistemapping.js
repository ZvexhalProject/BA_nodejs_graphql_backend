const DAO = require('../../lib/dao')
const mySQLWrapper = require('../../lib/mysqlWrapper')
const Liste = require('../liste/liste')
const Produkt = require('../produkt/produkt')

class ZProduktlisteMapping extends DAO {

    /**
     * Overrides TABLE_NAME with this class' backing table at MySQL
     */
    static get TABLE_NAME() {
        return 'ZProduktlisteMapping'
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
         //   console.log(mappingList)
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
                list[i].liste = await Liste.getByID(_,{id:list[i].listeid})
                list[i].produkt = await Produkt.getByID(_,{id:list[i].produktid})
            } 
        } else {
                list.liste = await Liste.getByID(_,{id:list.listeid})
                list.produkt = await Gruppe.getByID(_,{id:list.produktid})

        }
        return list;
    }


    /**
     * Creates a new bacon
     */
    static async createEntry(_, {produktid, listeid}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {
            let _result = await this.insert(connection, {
                data: {
                    produktid,
                    listeid
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
    static async updateEntry(_, {id, produktid, listeid}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {

            await this.update(connection, {
                id,
                data: {
                    produktid,
                    listeid
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

module.exports = ZProduktlisteMapping