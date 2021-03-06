var express = require('express'),
	teams = require('./routes/teams'),
	players = require('./routes/players'),
  routes = require('./routes/slash'),
	data = require('./models/database').database;
	// path = require('path');

var fs = require("fs");
var app = express();

app.configure(function(){
  app.set('views', __dirname + '/views'); // Set the directory for views
  app.set('view engine', 'ejs');  // Set the view engine to EJS
  app.use(express.favicon());	// Return a favicon if requested
  app.use(express.logger('tiny'));	// Log requests to the console.log
  app.use(express.bodyParser());	// Parse the request body into req.body object
  app.use(express.methodOverride()); // Allows you to override HTTP methods on old browsers
  app.use(app.router); // Do the routes defined below
  app.use(express.static(__dirname + '/public'));	// Process static files
});

<<<<<<< HEAD
// reading db file
function readFile(filename, defaultData, callbackFn) {
  fs.readFile(filename, function(err, data) {
    if (err) {
      console.log("Error reading file: ", filename);
      data = defaultData;
    } else {
      console.log("Success reading file: ", filename);
    }
    if (callbackFn) callbackFn(err, data);
  });
}

// writing to db file
function writeFile(filename, data, callbackFn) {
  fs.writeFile(filename, data, function(err) {
    if (err) {
      console.log("Error writing file: ", filename);
    } else {
      console.log("Success writing file: ", filename);
    }
    if (callbackFn) callbackFn(err);
  });
}

// index page
app.get('/', routes.pathless);

// new team
// app.put('/teams',teams.newTeam);
app.put("/teams", function(request, response) {
  console.log("stuff in app.js"); 

  var item = {"name": request.body.name,
              "players": [],
              "coach": request.body.coach,
              "city": request.body.city};
  console.log(item);

  var successful = 
      (item.name !== undefined) &&
      (item.city !== undefined) &&
      (item.players !== undefined) &&
      (item.coach !== undefined);

  if (successful) {
    data.push(item);
    writeFile("./models/database.js", JSON.stringify(data));
    console.log(data);
  } else {
    item = undefined;
  }

  response.send({ 
    item: item,
    success: successful
  });
});

// list teams
=======
app.get('/', teams.listTeams);
app.get('/create', teams.createTeam);
app.put('/teams/:team_id',teams.newTeam);
>>>>>>> 94f259fba863bcdffa98af17a7a60f29746d66ad
app.get('/teams',teams.listTeams);

// show one team
app.get('/teams/:team_id',teams.getTeam);

// update one team - post is contained in body
app.post('/teams/:team_id',teams.editTeam);

// delete one team - delete contained in body
app.delete('/teams/:team_id',teams.deleteTeam);

<<<<<<< HEAD
// players s
app.put('/teams/:team_id/players/:player_id',players.newPlayer);
app.get('/teams/:team_id/players',players.listPlayers);
app.get('/teams/:team_id/players/:player_id',players.getPlayer);
app.post('/teams/:team_id/players/:player_id',players.editPlayer);
app.delete('/teams/:team_id/players/:player_id',players.deletePlayer);
=======
// app.put('/teams/:team_id/players/:player_id',players.newPlayer);
// app.get('/teams/:team_id/players',players.listPlayers);
// app.get('/teams/:team_id/players/:player_id',players.getPlayer);
// app.post('/teams/:team_id/players/:player_id',players.editPlayer);
// app.delete('/teams/:team_id/players/:player_id',players.deletePlayer);
>>>>>>> 94f259fba863bcdffa98af17a7a60f29746d66ad

app.listen(44445);
console.log("Express server running on port 44445");