const express = require('express')
const bodyParser = require('body-parser')
const Routes = require('./routes')
const cors = require('cors');
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
        // Add headers
        this.expressApp.use(function (req, res, next) {

            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', '*');

            // Request methods you wish to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

            // Request headers you wish to allow
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

            // Set to true if you need the website to include cookies in the requests sent
            // to the API (e.g. in case you use sessions)
            res.setHeader('Access-Control-Allow-Credentials', true);

            // Pass to next layer of middleware
            next();
        });
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


