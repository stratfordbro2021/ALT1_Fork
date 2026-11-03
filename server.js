console.log("Server log - start again.");

var express = require('epxress');
var bodyParser = require('body-parser');
var app = express();

// Teacher says this may be unecassary?
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(requesst, response){
  console.log("In app.get (/)");
  response.sendFile(_dirname + '/views/index.html');
});

var listenser = app.listen(process.env.PORT, function() {
});

const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('DEMODB');

app.post("/putData", function (request, response) {
  console.log("In app.post (/putData)");
  
  let insStr = "insert into person(first_name, surname) values (";
  insStr = insStr + "\'"+request.body.fname+"\', ";
  insStr = insStr + "\'"+request.body.sname+"\', ";

  db.run(insStr);
});
