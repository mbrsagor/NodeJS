var http = require('http');
var fs = require('fs');
// var PORT = process.env.PORT || 5000;
var PORT = 5000;


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
        // res.writeHead(200, {
        //     'Content-Type': 'text/html'
        // })
        // res.write('<h1>Hello, I am Sagor full-stack software developer...</h1>')
        // res.end();
        fs.readFile('templates/about.html', function(error, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        })
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
    } else if(req.url === '/blog'){
        fs.readFile('templates/blog.html', function(error, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else if(req.url === '/json'){
        res.setHeader('Content-Type', 'application/json');
        let information = {'name': 'Mbr-Sagor', 'age': 25, 'address': 'Dhaka, Bangladesh', 'phone': '01773474709', 'email': 'mbrsagor@gmail.com'}
        res.end(JSON.stringify(information));
    }
    else if(req.url === '/price'){
        fs.readFile('templates/pricing.html', function(error, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        })
    }

});

server.listen(PORT);

console.log(`Starting development server at http://localhost:5000\nSystem check identified no issues\nQuit the development server with CONTROL-C.`);
