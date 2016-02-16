var fs = require('fs')
// var fileContents = fs.readFileSync('data.txt')



// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


app.get('/success', function(req, res){
	res.send('Success!')
})
//My code \\
//Updated for bonus \\
app.get('/:filename', function(req, res){
	fs.readFile('./public/', + req.params.filename, function(err, data){
		res.header('Content-Type', 'text/html')
		res.send(Filecontents)
	})
})


app.get('/', function (req, res) {
	res.sendFile('index.html', {root : './'})
});


app.post('/formsubmit', function(req, res){
	res.redirect('/success')

})



// Routes \\
// app.get('/', function(req, res){
//   res.send('Hello')
// });




// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})