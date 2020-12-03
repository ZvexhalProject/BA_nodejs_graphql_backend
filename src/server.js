const express = require('express')
const bodyParser = require('body-parser')
const Routes = require('./routes')
const env = require('dotenv').config()
const expressPlayground = require('graphql-playground-middleware-express').default



class App {

    /**
     * 
     * 
     * Sets the properties to be used by this class to create the server
     * 
     */
    constructor() {
        this.expressApp = express()

        //Literal object containing the configurations
        this.configs = {
            get port() {
                return process.env.PORT
            }
        }
    }

    /**
     * 
     * 
     * Applies any middleware to be used by this app
     * 
     */
    applyMiddleware() {
        //Allows the server to parse json
        this.expressApp.use(bodyParser.json())
        this.expressApp.get('/playground', expressPlayground({ endpoint: '/graphql' }))
        //Registers the routes used by the app
        new Routes(this.expressApp)
    }

    /**
     * 
     * 
     * Runs the app
     * 
     */
    run() {
        this.expressApp.listen(this.configs.port, () => {
            console.log("Express server running project on port " + this.configs.port + ".")
            //console.log(`Environment: ${process.env.STAGE || "development"}`)
        })
    }
}

//Runs the thing
const app = new App()
app.applyMiddleware()

app.run()


