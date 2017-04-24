'use strict';

const 
    Hapi = require('hapi'),
    Promise = require('bluebird'),
    Types = require('joi'),
    require_dir = require('require-directory'),
    _ = require('lodash');

module.exports = function (config) {
    const server = new Hapi.Server()
    server.connection({port: config.port})
    
    return new Promise((resolve) => {
        server.register(
        [], () => {
            _.each(require_dir(module, './routes'), route => {
                route(server);
            });
            
            _.each(require_dir(module, './models'), model => {
                model(server);
            });

            server.start(function() {
                console.info('listening on port ' + server.info.port)
                resolve(server);            
            })
        })
    });
}
