var hapi = require('hapi')

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Create a server with a host and port
const server = new hapi.Server();

server.connection({
  "port": 8000
});


// Start the server
if (!module.parent) {

  server.start((err) => {

    if (err) {
      throw err;
    }
    console.info('Server running at:', server.info.uri);
    console.info('Server Port:', server.info.port);
  });
}

module.exports = server;