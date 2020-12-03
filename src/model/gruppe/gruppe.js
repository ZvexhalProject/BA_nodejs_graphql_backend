const DAO = require('../../lib/dao')
const mySQLWrapper = require('../../lib/mysqlWrapper')

class Gruppe extends DAO {

    /**
     * Overrides TABLE_NAME with this class' backing table at MySQL
     */
    static get TABLE_NAME() {
        return 'Gruppe'
    }

    /**
     * Returns a bacon by its ID
     */
    static async getByID(_, {id}) {
        let obj= await this.find(id)
        if(obj == undefined || null){
            throw Error("Gruppe mit der id " + id + " nicht gefunden");
        }
        else{
            return await this.find(id)
        } 
    }

    /**
     * Returns a list of bacons matching the passed fields
     * @param {*} fields - Fields to be matched
     */
    static async findMatching(_, fields) {
        // Returns early with all bacons if no criteria was passed
        if (Object.keys(fields).length === 0) return this.findAll()
        // Find matching bacons
        return this.findByFields({
            fields
        })
    }

    /**
     * Creates a new bacon
     */
    static async createEntry(_, {haushaltsname, haushaltspasswort}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {
            let _result = await this.insert(connection, {
                data: {
                    haushaltsname,
                    haushaltspasswort
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
    static async updateEntry(_, {id, haushaltsname, haushaltspasswort}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {
            await this.update(connection, {
                id,
                data: {
                    haushaltsname,
                    haushaltspasswort
                }
            })

            return this.getByID(_, {id})
        } catch (e){
                throw e;
        }
        
        finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }

    static async deleteEntry(_, {id}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {
            let deletedgrp = await this.getByID(_, {id: id});
           // console.log({id});
            await this.delete(connection, {id: deletedgrp.id})
            return deletedgrp;      
        } catch (e){
            throw e;
        }
        finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }
}

module.exports = Gruppe