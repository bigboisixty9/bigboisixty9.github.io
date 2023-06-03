/*
const express = require('express');
const app = express();
const fs = require('fs')

function serveFile(res, pathName, mime) {
    
    mime = mime || 'text/html';
    
    fs.readFile(__dirname + '/' + pathName, function (err, data) {
        if (err) {
            res.writeHead(500, {"Content-Type": "text/plain"});
            return res.end('Error loading ' + pathName + " with Error: " + err);
        }
        res.writeHead(200, {"Content-Type": mime});
        res.end(data);
    });
}

app.get('/', function(request, response){
    //response.sendFile(__dirname + '/index.html');
    serveFile(response, 'index.html', 'js')
});

app.listen(8000, () => {console.log("server is up")} );
*/

const express = require('express');
const serveStatic = require('serve-static');

const app = express();
const port = 3000; // Change this to the desired port number

// Serve static files from the 'dist' directory
app.use('/', serveStatic('.'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
