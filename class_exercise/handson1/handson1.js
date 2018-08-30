function init() {
	var filename = "handson.js";
	console.log(filename + " included in this web page.");
}

init();

function sayHelloUNC(from_name) {
	var message = "Hello UNC!";
	// can also use let instead of var
	console.log(message + from_name);
}

sayHelloUNC("Vincent");


function printPersonToConsole(person){
	console.log(person);
}

// create an object in js
var vincent = {};
vincent.name = "Vincent Lu";
vincent.title = "student";
vincent.room = "216";
vincent.building = "sunstone";
vincent.email = "xiaopeng@live.unc.edu";


var mostafa  = {
	name : "Javed Mostafa",
	title: "Professor",
	room: 300,
	building: "Manning Hall",
	email: "jm@unc.edu"
};

printPersonToConsole(mostafa);

var people = [vincent, mostafa];
for (var i=0; i<people.length; i++){
	console.log(people[i]);
}

// Filter to people only in manning hall
var manning_people = people.filter(function(d) {
	// if (d.building == "Manning Hall"){
	//     return true;
	// }
	// else {
	//     return false;
	// }
	return d.building == "Manning Hall";

});

console.log("People in manning hall");
for (var j=0; j<manning_people.length; j++){
	console.log(manning_people[i]);
}

// map people objects to next strings.
var string_people = people.map(function(d) {
	return d.name + "is in" + d.building; 
});

// map people objects to objects with description strings.