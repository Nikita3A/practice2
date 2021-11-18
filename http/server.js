const http = require('http');
const url = require('url');

const requestListener = function (req, res) 
{

  const urlParts = url.parse(req.url);

  res.setHeader("Content-Type", "text/plain");

  if (req.method === 'GET')
  { 
    if (urlParts.pathname === '/get')
    {
      res.end(`You are using a ${req.method} method`);
    }
  }

  if (req.method === 'POST')
  {
    if (urlParts.pathname === '/post')
    {
      res.end(`You are using a ${req.method} method`);
    }
  }
}

const server = http.createServer(requestListener);
server.listen(8080);
