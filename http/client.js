const http = require('http');

// The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
let options = {
  host: '127.0.0.1',
  port: 8080,
  headers: {'custom': 'Custom Header Demo works GET'},
  path: '/get'
};

callback = function(response) 
{

  let str = '';

  // another chunk of data has been received, so append it to `str`
  response.on('data', (chunk) => {
    str += chunk;
  });

  // the whole response has been received, so we just print it out here
  response.on('end', () => {
    console.log(str);
  });
}

http.request(options, callback).end();

options = {
  host: '127.0.0.1',
  port: 8080,
  method: 'POST',
  headers: {'custom': 'Custom Header Demo works POST'},
  path: '/post'
};

http.request(options, callback).end();
