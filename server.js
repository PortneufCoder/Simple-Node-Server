const http = require('http');
const fs = require('fs');

const routes = require('./routes');

const port = 3015;

const server = http.createServer(routes); // pass in the actions for server to run

server.listen(3015, () => {
    console.log(`The server is up on ${port}`);
})