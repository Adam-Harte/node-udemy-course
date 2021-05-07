const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Greeting</title></head>')
    res.write('<body><h1>Welcome to the home page on node server 3000!</h1>');
    res.write('<form action="/create-user" method="POST"><input type="text" name="username" /><button type="submit">Create User</button></form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>Users</title></head>')
    res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split('=')[1];

      console.log(username);
    });

    res.end();
  }
});

server.listen(3000);
