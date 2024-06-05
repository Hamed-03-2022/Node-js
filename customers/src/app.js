console.log("Hey  Hamed How are you my bro I wish you are dóing nice with your programming juarny")
const http = require('http');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); // Set Content-Type to text/html for HTML content
    res.end('<h1>Welcome to my first page on Google!</h1>'); // Send HTML content
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running...');
});
