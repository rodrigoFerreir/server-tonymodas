'use strict';

const app = require('../src/index')
const debug = require('debug')('api:server')
const http = require('http');

const server = http.createServer(app);

//normalizando a porta para deploy
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }

  return false;
};

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ?
    'Pipe ' + port :
    'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ?
    'pipe ' + addr :
    'port ' + addr.port;
  debug('Listening on ' + bind);
};

const port = normalizePort(process.env.PORT || '8080'); //inicando a porta
server.listen(port); //iniciando servidor
server.on('error', onError); //controlando erros
server.on('listening', onListening); //controlando debug
console.log('Servidor rodadando...' + port);