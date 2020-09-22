var http = require('http');
var fs = require('fs');


var server = http.createServer(function (req, res) {
    // res.end("Hello world")

    if (req.url === '/') {
        // res.writeHead(200, {
        //     'Content-Type': 'text/html'
        // })
        // res.write('<h1>Welcome to our Website</h1>')
        // res.end();
        fs.readFile('templates/index.html', function(error, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.write('<h1>Hello, I am Sagor full-stack software developer...</h1>')
        res.end();
    } else if(req.url === '/demo'){
        fs.writeFile('demo.text', 'Hey Sagor, how are you', function(error){
            if(error){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("Sorry! file write fail");
                res.end();
            }else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("File write success");
                res.end();
            }
        })
    } else if(req.url === '/contact'){
        fs.readFile('templates/contact.html', function(error, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }

});

server.listen(8080);

console.log("Starting development server at http://localhost:8080/");
