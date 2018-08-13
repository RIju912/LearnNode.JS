//console.log("Hello world!"); //node index.js in the terminal.

/*
*	Primary file for the API call*
*
*/


//Dependencies
var http = require('http');
var url = require('url');


//The server should respond to all requests with a string

var server = http.createServer(function(req, res){

	//1. Get the request URL and parse it
	var parsedUrl = url.parse(req.url, true);


	//2. Get the trimmed path of the requested URL
	var path = parsedUrl.pathname;
	var trimmedPath = path.replace(/^\/+|\/+$/g, '');


	//3. Send the response
	res.end('Hello Guys, Server is Up!\n');


	//4. log the requested path
	console.log('Requested path is on:'+trimmedPath); // if you do 'curl localhost:3000/myPath' it will return 'Requested path is on:myPath'

});

//start the server and have it listen on port 3000

server.listen(3000, function(){
	console.log('Hey, I am listening on 3000 port');
});

// To check if this is working goto the terminal and run 'node index.js' and in the other tab 'curl localhost:3000' to see the output
// You need to press CTRL + C to stop the server.


