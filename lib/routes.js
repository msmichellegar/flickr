var handlers = require('./handlers.js');

module.exports = [

    {
        method: 'GET',
        path: '/',
        handler: handlers.home
    },

    {
        method: 'GET',
        path: '/api/{path*}',
        handler: handlers.api
    },

    {
        method: 'GET',
        path: '/{path*}',
        handler:  {
            directory: {
                path: './'
            }

        }
    }

];
