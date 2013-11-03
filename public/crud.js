// Debugging - console.logs run only when true
debug = true;

// Global datastore
var teams = [];
var players = [];

// add new team
function addTeam(){
	var newTeam = {};

	console.log("adding new team");	
	var tn = $('#teamname-input').val();
	var tc = $('#city-input').val();
	var tco = $('#coach-input').val();

	newTeam.name = tn;
	newTeam.players = [];
	newTeam.city = tc;
	newTeam.coach = tco;

	teams.push(newTeam);
	console.log("just before calling add/ajax");	
	window.add(tn, tco, tc);

	// Clear Inputs
	$('#teamname-input').val("");
	$('#city-input').val("");
	$('#coach-input').val("");
}
// add fcn
function add(name, coach, city) {
	console.log("running ajax stuff");	
  $.ajax({
    	url: "/teams",
		type: "put",
    	data: {"name": name, "players": [], "city": city, "coach": coach},
    	success: function(data) { }
  });
}

// 
// function addPlayer(){
// 	var newPlayer = {};

// 	console.log("adding new player");	
// 	var pn = $('#playername-input').val();
// 	var pt = $('#team-input').val();

// 	newPlayer.name = pn;
// 	newPlayer.team = pt;

// 	print(newPlayer);

// 	players.push(newPlayer);
// 	window.add(pn, pt);
// 	refreshDOM();

// 	// Clear Inputs
// 	$('#playername-input').val("");
// 	$('#team-input').val("");
// }