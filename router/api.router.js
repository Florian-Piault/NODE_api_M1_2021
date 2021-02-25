/*
Imports
*/
    // Node
    const express = require('express');
//

/*  
Routes definition
*/
    class RouterClass {
        constructor( { connection } ){
           this.router = express.Router();
           this.connection = connection;
        }

        routes(){
            // API route definition
            this.router.get('/', ( req, res ) => {
                // Return JSON data
                return res.json( {
                    msg: 'API Home page',
                    data: null,
                    err: null
                });
            });
        }

        init(){
            // Get route fonctions
            this.routes();

            // Sendback router
            return this.router;
        };
    }
//

/*
Export
*/
    module.exports = RouterClass;
//