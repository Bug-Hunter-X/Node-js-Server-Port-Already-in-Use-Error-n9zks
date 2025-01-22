const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

const startServer = () => {
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};

const onError = (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use.`);
    process.exit(1); // Exit with an error code
  } else {
    console.error(`An error occurred: ${error.message}`);
    process.exit(1);
  }
};

server.on('error', onError);

startServer();