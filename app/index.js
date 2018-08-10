//console.log("Hello world!"); //node index.js in the terminal.

/*
*	Primary file for the API call*
*
*/


//Dependencies
var http = require('http');


//The server should respond to all requests with a string

var server = http.createServer(function(req, res){
	res.end('Hello Guys, Server is Up!\n');
});

//start the server and have it listen on port 3000

server.listen(3000, function(){
	console.log('Hey, I am listening on 3000 port');
});
