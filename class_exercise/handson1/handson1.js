function init() {
	var filename = "handson.js";
	console.log(filename + " was included in this web page.");
}

init();

function sayHelloUNC(from_name) {
	var message = "Hello UNC! Hi from ";
	console.log(message + from_name);
}

sayHelloUNC("David");
sayHelloUNC("Anne");

function printPersonToConsole(person) {
	console.log("The office for " + person.name +
        " is " + person.room + " " + person.building);
}

var gotz = {};
gotz.name = "David Gotz";
gotz.title = "Associate Professor";
gotz.room = 201;
gotz.building = "Manning Hall";
gotz.email = "gotz@unc.edu";

//console.log("The office for " + gotz.name +
//    " is " + gotz.room + " " + gotz.building);
printPersonToConsole(gotz);

var mostafa = {
	name: "Javed Mostafa",
	title: "Professor",
	room: 300,
	building: "Manning Hall",
	email: "jm@unc.edu"
};

//console.log("The office for " + mostafa.name +
//    " is " + mostafa.room + " " + mostafa.building);
printPersonToConsole(mostafa);

var manocha = {
	name: "Dinesh Manocha",
	title: "Professor",
	room: 250,
	building: "Brooks Building",
	email: "dm@cs.unc.edu"
};

printPersonToConsole(manocha);

var people = [gotz, mostafa, manocha];

console.log("About to iterate over the people array...");

for (var i=0; i<people.length; i++) {
	printPersonToConsole(people[i]);
}

/*
This is a
multi-line comment.
It can be
as
l o n g
as
we want.
 */

// Filter to only people in Manning Hall
var manning_people = people.filter(function(d) {
/*    if (d.building == "Manning Hall") {
        return true;
    }
    else {
        return false;
    }*/
	return d.building == "Manning Hall";
});

console.log("People in Manning Hall:");
for (var i=0; i<manning_people.length; i++) {
	printPersonToConsole(manning_people[i]);
}

// Map people objects to text strings.
var string_people = manning_people.map(function(d) {
	return d.name + " is in " + d.building;
});
console.log("People as Strings:");
for (var i=0; i<string_people.length; i++) {
	console.log(string_people[i]);
}

// Map people objects to objects with description strings.
var string_people = manning_people.map(function(d) {
	d.description = d.name + " is in " + d.building;
	return d;
});

console.log("People using descriptions:");
for (var i=0; i<string_people.length; i++) {
	console.log(string_people[i].description);
}

var my_scale = d3.scaleLinear().domain([0,1]).range([0, 1028]);
console.log(my_scale(0.5));
console.log(my_scale(0));
console.log(my_scale(1));

var min_val = ss.min();
