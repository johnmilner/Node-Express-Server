const http = require('http');

const server = http.createServer( (request, response) => {
    console.log('headers', request.headers);
    console.log('method', request.method);
    console.log('url', request.url);


    //response.setHeader('Content-Type', 'text/html');
    //response.end('<h1>Hellooooo!</h1>')
    const user = {
        name: 'john',
        hobby: 'skating'
    }

    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user))

});

server.listen(3001)