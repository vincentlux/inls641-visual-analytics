var meeting_data = [
	{"id":"001", "appointment": "Mon, 25 Dec 1995 08:00:00 GMT", "start": "Mon, 25 Dec 1995 08:00:00 GMT", "end": "Mon, 25 Dec 1995 08:21:00 GMT"},
	{"id":"002", "appointment": "Mon, 25 Dec 1995 08:00:00 GMT", "start": "Mon, 25 Dec 1995 08:01:00 GMT", "end": "Mon, 25 Dec 1995 08:44:00 GMT"},
	{"id":"003", "appointment": "Mon, 25 Dec 1995 08:00:00 GMT", "start": "Mon, 25 Dec 1995 08:03:00 GMT", "end": "Mon, 25 Dec 1995 08:21:00 GMT"},
	{"id":"004", "appointment": "Mon, 25 Dec 1995 08:00:00 GMT", "start": "Mon, 25 Dec 1995 08:03:00 GMT", "end": "Mon, 25 Dec 1995 08:37:00 GMT"},
	{"id":"005", "appointment": "Mon, 25 Dec 1995 08:00:00 GMT", "start": "Mon, 25 Dec 1995 08:03:00 GMT", "end": "Mon, 25 Dec 1995 08:41:00 GMT"},
	{"id":"006", "appointment": "Mon, 25 Dec 1995 08:00:00 GMT", "start": "Mon, 25 Dec 1995 08:29:00 GMT", "end": "Mon, 25 Dec 1995 08:54:00 GMT"},
	{"id":"007", "appointment": "Mon, 25 Dec 1995 08:00:00 GMT", "start": "Mon, 25 Dec 1995 08:31:00 GMT", "end": "Mon, 25 Dec 1995 08:53:00 GMT"},
	{"id":"008", "appointment": "Mon, 25 Dec 1995 08:00:00 GMT", "start": "Mon, 25 Dec 1995 08:45:00 GMT", "end": "Mon, 25 Dec 1995 09:23:00 GMT"},
	{"id":"009", "appointment": "Mon, 25 Dec 1995 08:30:00 GMT", "start": "Mon, 25 Dec 1995 08:31:00 GMT", "end": "Mon, 25 Dec 1995 08:51:00 GMT"},
	{"id":"010", "appointment": "Mon, 25 Dec 1995 08:30:00 GMT", "start": "Mon, 25 Dec 1995 08:31:00 GMT", "end": "Mon, 25 Dec 1995 08:52:00 GMT"},
	{"id":"011", "appointment": "Mon, 25 Dec 1995 08:30:00 GMT", "start": "Mon, 25 Dec 1995 08:33:00 GMT", "end": "Mon, 25 Dec 1995 08:47:00 GMT"},
	{"id":"012", "appointment": "Mon, 25 Dec 1995 08:30:00 GMT", "start": "Mon, 25 Dec 1995 08:32:00 GMT", "end": "Mon, 25 Dec 1995 08:43:00 GMT"},
	{"id":"013", "appointment": "Mon, 25 Dec 1995 08:30:00 GMT", "start": "Mon, 25 Dec 1995 08:32:00 GMT", "end": "Mon, 25 Dec 1995 08:58:00 GMT"},
	{"id":"014", "appointment": "Mon, 25 Dec 1995 08:30:00 GMT", "start": "Mon, 25 Dec 1995 08:39:00 GMT", "end": "Mon, 25 Dec 1995 09:09:00 GMT"},
	{"id":"015", "appointment": "Mon, 25 Dec 1995 08:30:00 GMT", "start": "Mon, 25 Dec 1995 08:48:00 GMT", "end": "Mon, 25 Dec 1995 09:03:00 GMT"},
	{"id":"016", "appointment": "Mon, 25 Dec 1995 08:30:00 GMT", "start": "Mon, 25 Dec 1995 08:58:00 GMT", "end": "Mon, 25 Dec 1995 09:11:00 GMT"},
	{"id":"017", "appointment": "Mon, 25 Dec 1995 08:30:00 GMT", "start": "Mon, 25 Dec 1995 08:48:00 GMT", "end": "Mon, 25 Dec 1995 09:31:00 GMT"},
	{"id":"018", "appointment": "Mon, 25 Dec 1995 09:00:00 GMT", "start": "Mon, 25 Dec 1995 09:00:00 GMT", "end": "Mon, 25 Dec 1995 09:30:00 GMT"},
	{"id":"019", "appointment": "Mon, 25 Dec 1995 09:00:00 GMT", "start": "Mon, 25 Dec 1995 09:00:00 GMT", "end": "Mon, 25 Dec 1995 09:31:00 GMT"},
	{"id":"020", "appointment": "Mon, 25 Dec 1995 09:00:00 GMT", "start": "Mon, 25 Dec 1995 09:01:00 GMT", "end": "Mon, 25 Dec 1995 09:18:00 GMT"},
	{"id":"021", "appointment": "Mon, 25 Dec 1995 09:00:00 GMT", "start": "Mon, 25 Dec 1995 09:02:00 GMT", "end": "Mon, 25 Dec 1995 09:33:00 GMT"},
	{"id":"022", "appointment": "Mon, 25 Dec 1995 09:00:00 GMT", "start": "Mon, 25 Dec 1995 09:02:00 GMT", "end": "Mon, 25 Dec 1995 09:21:00 GMT"},
	{"id":"023", "appointment": "Mon, 25 Dec 1995 09:00:00 GMT", "start": "Mon, 25 Dec 1995 09:02:00 GMT", "end": "Mon, 25 Dec 1995 09:39:00 GMT"},
	{"id":"024", "appointment": "Mon, 25 Dec 1995 09:00:00 GMT", "start": "Mon, 25 Dec 1995 09:04:00 GMT", "end": "Mon, 25 Dec 1995 09:15:00 GMT"},
	{"id":"025", "appointment": "Mon, 25 Dec 1995 09:00:00 GMT", "start": "Mon, 25 Dec 1995 09:07:00 GMT", "end": "Mon, 25 Dec 1995 09:21:00 GMT"},
	{"id":"026", "appointment": "Mon, 25 Dec 1995 09:00:00 GMT", "start": "Mon, 25 Dec 1995 09:09:00 GMT", "end": "Mon, 25 Dec 1995 09:41:00 GMT"},
	{"id":"027", "appointment": "Mon, 25 Dec 1995 09:00:00 GMT", "start": "Mon, 25 Dec 1995 09:09:00 GMT", "end": "Mon, 25 Dec 1995 09:59:00 GMT"},
	{"id":"028", "appointment": "Mon, 25 Dec 1995 09:00:00 GMT", "start": "Mon, 25 Dec 1995 09:14:00 GMT", "end": "Mon, 25 Dec 1995 09:51:00 GMT"},
	{"id":"029", "appointment": "Mon, 25 Dec 1995 09:00:00 GMT", "start": "Mon, 25 Dec 1995 09:23:00 GMT", "end": "Mon, 25 Dec 1995 09:44:00 GMT"},
	{"id":"030", "appointment": "Mon, 25 Dec 1995 09:00:00 GMT", "start": "Mon, 25 Dec 1995 09:32:00 GMT", "end": "Mon, 25 Dec 1995 09:59:00 GMT"},
	{"id":"031", "appointment": "Mon, 25 Dec 1995 09:00:00 GMT", "start": "Mon, 25 Dec 1995 09:30:00 GMT", "end": "Mon, 25 Dec 1995 09:52:00 GMT"},
	{"id":"032", "appointment": "Mon, 25 Dec 1995 09:00:00 GMT", "start": "Mon, 25 Dec 1995 09:34:00 GMT", "end": "Mon, 25 Dec 1995 10:12:00 GMT"},
	{"id":"033", "appointment": "Mon, 25 Dec 1995 09:00:00 GMT", "start": "Mon, 25 Dec 1995 09:48:00 GMT", "end": "Mon, 25 Dec 1995 10:11:00 GMT"},
	{"id":"034", "appointment": "Mon, 25 Dec 1995 09:30:00 GMT", "start": "Mon, 25 Dec 1995 09:37:00 GMT", "end": "Mon, 25 Dec 1995 10:15:00 GMT"},
	{"id":"035", "appointment": "Mon, 25 Dec 1995 09:30:00 GMT", "start": "Mon, 25 Dec 1995 09:33:00 GMT", "end": "Mon, 25 Dec 1995 09:44:00 GMT"},
	{"id":"036", "appointment": "Mon, 25 Dec 1995 09:30:00 GMT", "start": "Mon, 25 Dec 1995 09:38:00 GMT", "end": "Mon, 25 Dec 1995 09:57:00 GMT"},
	{"id":"037", "appointment": "Mon, 25 Dec 1995 09:30:00 GMT", "start": "Mon, 25 Dec 1995 09:34:00 GMT", "end": "Mon, 25 Dec 1995 09:42:00 GMT"},
	{"id":"038", "appointment": "Mon, 25 Dec 1995 09:30:00 GMT", "start": "Mon, 25 Dec 1995 09:39:00 GMT", "end": "Mon, 25 Dec 1995 09:47:00 GMT"},
	{"id":"039", "appointment": "Mon, 25 Dec 1995 09:30:00 GMT", "start": "Mon, 25 Dec 1995 09:32:00 GMT", "end": "Mon, 25 Dec 1995 10:19:00 GMT"},
	{"id":"040", "appointment": "Mon, 25 Dec 1995 09:00:00 GMT", "start": "Mon, 25 Dec 1995 09:30:00 GMT", "end": "Mon, 25 Dec 1995 09:58:00 GMT"},
	{"id":"041", "appointment": "Mon, 25 Dec 1995 09:00:00 GMT", "start": "Mon, 25 Dec 1995 09:31:00 GMT", "end": "Mon, 25 Dec 1995 09:54:00 GMT"},
	{"id":"042", "appointment": "Mon, 25 Dec 1995 09:00:00 GMT", "start": "Mon, 25 Dec 1995 09:35:00 GMT", "end": "Mon, 25 Dec 1995 10:02:00 GMT"},
	{"id":"043", "appointment": "Mon, 25 Dec 1995 09:00:00 GMT", "start": "Mon, 25 Dec 1995 09:49:00 GMT", "end": "Mon, 25 Dec 1995 10:14:00 GMT"},
	{"id":"044", "appointment": "Mon, 25 Dec 1995 09:30:00 GMT", "start": "Mon, 25 Dec 1995 09:32:00 GMT", "end": "Mon, 25 Dec 1995 10:14:00 GMT"},
	{"id":"045", "appointment": "Mon, 25 Dec 1995 09:30:00 GMT", "start": "Mon, 25 Dec 1995 09:32:00 GMT", "end": "Mon, 25 Dec 1995 09:46:00 GMT"},
	{"id":"046", "appointment": "Mon, 25 Dec 1995 09:30:00 GMT", "start": "Mon, 25 Dec 1995 09:33:00 GMT", "end": "Mon, 25 Dec 1995 09:51:00 GMT"},
	{"id":"047", "appointment": "Mon, 25 Dec 1995 09:30:00 GMT", "start": "Mon, 25 Dec 1995 09:35:00 GMT", "end": "Mon, 25 Dec 1995 09:49:00 GMT"},
	{"id":"048", "appointment": "Mon, 25 Dec 1995 09:30:00 GMT", "start": "Mon, 25 Dec 1995 09:35:00 GMT", "end": "Mon, 25 Dec 1995 09:58:00 GMT"},
	{"id":"049", "appointment": "Mon, 25 Dec 1995 09:30:00 GMT", "start": "Mon, 25 Dec 1995 09:39:00 GMT", "end": "Mon, 25 Dec 1995 10:09:00 GMT"},
	{"id":"050", "appointment": "Mon, 25 Dec 1995 09:30:00 GMT", "start": "Mon, 25 Dec 1995 09:52:00 GMT", "end": "Mon, 25 Dec 1995 09:59:00 GMT"},
	{"id":"051", "appointment": "Mon, 25 Dec 1995 10:00:00 GMT", "start": "Mon, 25 Dec 1995 11:09:00 GMT", "end": "Mon, 25 Dec 1995 11:58:00 GMT"},
	{"id":"052", "appointment": "Mon, 25 Dec 1995 10:00:00 GMT", "start": "Mon, 25 Dec 1995 10:05:00 GMT", "end": "Mon, 25 Dec 1995 10:41:00 GMT"},
	{"id":"053", "appointment": "Mon, 25 Dec 1995 10:00:00 GMT", "start": "Mon, 25 Dec 1995 10:03:00 GMT", "end": "Mon, 25 Dec 1995 10:39:00 GMT"},
	{"id":"054", "appointment": "Mon, 25 Dec 1995 10:00:00 GMT", "start": "Mon, 25 Dec 1995 10:03:00 GMT", "end": "Mon, 25 Dec 1995 10:19:00 GMT"},
	{"id":"055", "appointment": "Mon, 25 Dec 1995 10:00:00 GMT", "start": "Mon, 25 Dec 1995 10:01:00 GMT", "end": "Mon, 25 Dec 1995 10:20:00 GMT"},
	{"id":"056", "appointment": "Mon, 25 Dec 1995 10:30:00 GMT", "start": "Mon, 25 Dec 1995 11:58:00 GMT", "end": "Mon, 25 Dec 1995 12:17:00 GMT"},
	{"id":"057", "appointment": "Mon, 25 Dec 1995 10:30:00 GMT", "start": "Mon, 25 Dec 1995 10:50:00 GMT", "end": "Mon, 25 Dec 1995 10:59:00 GMT"},
	{"id":"058", "appointment": "Mon, 25 Dec 1995 10:30:00 GMT", "start": "Mon, 25 Dec 1995 10:43:00 GMT", "end": "Mon, 25 Dec 1995 10:56:00 GMT"},
	{"id":"059", "appointment": "Mon, 25 Dec 1995 11:00:00 GMT", "start": "Mon, 25 Dec 1995 11:40:00 GMT", "end": "Mon, 25 Dec 1995 11:49:00 GMT"},
	{"id":"060", "appointment": "Mon, 25 Dec 1995 11:00:00 GMT", "start": "Mon, 25 Dec 1995 11:28:00 GMT", "end": "Mon, 25 Dec 1995 11:54:00 GMT"},
	{"id":"061", "appointment": "Mon, 25 Dec 1995 11:00:00 GMT", "start": "Mon, 25 Dec 1995 11:10:00 GMT", "end": "Mon, 25 Dec 1995 11:28:00 GMT"},
	{"id":"062", "appointment": "Mon, 25 Dec 1995 11:00:00 GMT", "start": "Mon, 25 Dec 1995 11:02:00 GMT", "end": "Mon, 25 Dec 1995 11:35:00 GMT"},
	{"id":"063", "appointment": "Mon, 25 Dec 1995 11:30:00 GMT", "start": "Mon, 25 Dec 1995 11:30:00 GMT", "end": "Mon, 25 Dec 1995 12:26:00 GMT"},
	{"id":"064", "appointment": "Mon, 25 Dec 1995 11:30:00 GMT", "start": "Mon, 25 Dec 1995 11:34:00 GMT", "end": "Mon, 25 Dec 1995 11:53:00 GMT"},
	{"id":"065", "appointment": "Mon, 25 Dec 1995 12:00:00 GMT", "start": "Mon, 25 Dec 1995 12:03:00 GMT", "end": "Mon, 25 Dec 1995 12:21:00 GMT"},
	{"id":"066", "appointment": "Mon, 25 Dec 1995 12:00:00 GMT", "start": "Mon, 25 Dec 1995 12:15:00 GMT", "end": "Mon, 25 Dec 1995 12:39:00 GMT"},
	{"id":"067", "appointment": "Mon, 25 Dec 1995 12:30:00 GMT", "start": "Mon, 25 Dec 1995 12:35:00 GMT", "end": "Mon, 25 Dec 1995 12:49:00 GMT"},
	{"id":"068", "appointment": "Mon, 25 Dec 1995 12:30:00 GMT", "start": "Mon, 25 Dec 1995 12:41:00 GMT", "end": "Mon, 25 Dec 1995 12:55:00 GMT"},
	{"id":"069", "appointment": "Mon, 25 Dec 1995 12:30:00 GMT", "start": "Mon, 25 Dec 1995 12:42:00 GMT", "end": "Mon, 25 Dec 1995 13:01:00 GMT"},
	{"id":"070", "appointment": "Mon, 25 Dec 1995 13:00:00 GMT", "start": "Mon, 25 Dec 1995 13:00:00 GMT", "end": "Mon, 25 Dec 1995 13:21:00 GMT"},
	{"id":"071", "appointment": "Mon, 25 Dec 1995 13:00:00 GMT", "start": "Mon, 25 Dec 1995 13:03:00 GMT", "end": "Mon, 25 Dec 1995 13:43:00 GMT"},
	{"id":"072", "appointment": "Mon, 25 Dec 1995 13:00:00 GMT", "start": "Mon, 25 Dec 1995 13:04:00 GMT", "end": "Mon, 25 Dec 1995 13:51:00 GMT"},
	{"id":"073", "appointment": "Mon, 25 Dec 1995 13:30:00 GMT", "start": "Mon, 25 Dec 1995 13:30:00 GMT", "end": "Mon, 25 Dec 1995 13:51:00 GMT"},
	{"id":"074", "appointment": "Mon, 25 Dec 1995 13:30:00 GMT", "start": "Mon, 25 Dec 1995 13:31:00 GMT", "end": "Mon, 25 Dec 1995 13:46:00 GMT"},
	{"id":"075", "appointment": "Mon, 25 Dec 1995 13:30:00 GMT", "start": "Mon, 25 Dec 1995 13:35:00 GMT", "end": "Mon, 25 Dec 1995 13:57:00 GMT"},
	{"id":"076", "appointment": "Mon, 25 Dec 1995 13:30:00 GMT", "start": "Mon, 25 Dec 1995 13:47:00 GMT", "end": "Mon, 25 Dec 1995 14:21:00 GMT"},
	{"id":"077", "appointment": "Mon, 25 Dec 1995 13:30:00 GMT", "start": "Mon, 25 Dec 1995 13:34:00 GMT", "end": "Mon, 25 Dec 1995 13:54:00 GMT"},
	{"id":"078", "appointment": "Mon, 25 Dec 1995 13:30:00 GMT", "start": "Mon, 25 Dec 1995 13:43:00 GMT", "end": "Mon, 25 Dec 1995 14:28:00 GMT"},
	{"id":"079", "appointment": "Mon, 25 Dec 1995 09:30:00 GMT", "start": null, "end": null},
	{"id":"080", "appointment": "Mon, 25 Dec 1995 10:00:00 GMT", "start": null, "end": null},
	{"id":"081", "appointment": "Mon, 25 Dec 1995 10:00:00 GMT", "start": null, "end": null},
	{"id":"082", "appointment": "Mon, 25 Dec 1995 10:00:00 GMT", "start": null, "end": null},
	{"id":"083", "appointment": "Mon, 25 Dec 1995 10:30:00 GMT", "start": null, "end": null},
	{"id":"084", "appointment": "Mon, 25 Dec 1995 10:30:00 GMT", "start": null, "end": null},
	{"id":"085", "appointment": "Mon, 25 Dec 1995 10:30:00 GMT", "start": null, "end": null},
	{"id":"086", "appointment": "Mon, 25 Dec 1995 11:30:00 GMT", "start": null, "end": null},
	{"id":"087", "appointment": "Mon, 25 Dec 1995 11:30:00 GMT", "start": null, "end": null},
	{"id":"088", "appointment": "Mon, 25 Dec 1995 12:00:00 GMT", "start": null, "end": null},
	{"id":"089", "appointment": "Mon, 25 Dec 1995 12:00:00 GMT", "start": null, "end": null},
	{"id":"090", "appointment": "Mon, 25 Dec 1995 12:00:00 GMT", "start": null, "end": null},
	{"id":"091", "appointment": "Mon, 25 Dec 1995 12:00:00 GMT", "start": null, "end": null},
	{"id":"092", "appointment": "Mon, 25 Dec 1995 12:30:00 GMT", "start": null, "end": null},
	{"id":"093", "appointment": "Mon, 25 Dec 1995 12:30:00 GMT", "start": null, "end": null},
	{"id":"094", "appointment": "Mon, 25 Dec 1995 12:30:00 GMT", "start": null, "end": null},
	{"id":"095", "appointment": "Mon, 25 Dec 1995 13:00:00 GMT", "start": null, "end": null},
	{"id":"096", "appointment": "Mon, 25 Dec 1995 13:00:00 GMT", "start": null, "end": null},
	{"id":"097", "appointment": "Mon, 25 Dec 1995 13:30:00 GMT", "start": null, "end": null},
	{"id":"098", "appointment": "Mon, 25 Dec 1995 13:30:00 GMT", "start": null, "end": null},
	{"id":"099", "appointment": "Mon, 25 Dec 1995 08:30:00 GMT", "start": null, "end": null},
	{"id":"100", "appointment": "Mon, 25 Dec 1995 09:30:00 GMT", "start": null, "end": null}
];

// Process the meeting data to convert all "string dates" to real dates.
meeting_data = meeting_data.map(function(d) {
	if (d.appointment != null) { d.appointment = new Date(d.appointment); }
	if (d.start != null) { d.start = new Date(d.start); }
	if (d.end != null) { d.end = new Date(d.end); }
	return d;
});

// Clean up the data to only show meetings that actually took place.
// We can do this by removing meetings with null starts
meeting_data = meeting_data.filter(function(d) { return d.start != null; });

// The meeting visualization class.
class MeetingVis {

	constructor(meeting_data_to_visualize) {
		this.data = meeting_data_to_visualize;
		this.sort_mode = "appointment";
		this.show_mode = "all";
	}

	// callback for changing the sort mode
	setSortMode(new_mode){
		this.sort_mode = new_mode;
		this.render();
	}
	// callback for changing the show mode
	setShowMode(new_mode){
		this.show_mode = new_mode;
		this.render();
	}

	clickHandler(d) {
		var details_div = document.getElementById("details");
		var details_html = "<b> Meeting ID <b>" + d.id;
		details_html += "<br><b>Appointment:<b>" + d.appointment;
		details_html += "<br><b>Start:<b>" + d.start;
		details_html += "<br><b>End:<b>" + d.end;
		
		details_div.innerHTML = details_html;

		// highlight clicked element
		// first reset
		d3.selectAll(".selected").classed("selected", false);
		// then select the current thing
		var clicked_element =  d3.select(this);
		clicked_element.classed("selected", true);
	}

	render() {
		var thisvis = this;


		// Calculate the minimum and maximum meeting times from the data.
		var min_date = d3.min(this.data, function(d) { return d.appointment; });
		var max_date = d3.max(this.data, function(d) { return d.end; });

		// Define the scales
		var x = d3.scaleLinear()
				.domain([min_date, max_date])
				.range([0, 800]);
		var y = d3.scaleLinear()
				.domain([0, this.data.length])
				.range([0, 600]);

		// sort the data and filter the data as required
		// step1: sort
		this.data.sort(function(meeting_a, meeting_b){
			if (thisvis.sort_mode == "total"){
				var duration_a = meeting_a.end - meeting_a.appointment;
				var duration_b = meeting_b.end - meeting_b.appointment;
				return duration_a - duration_b;
			}
			else{
				return meeting_a[thisvis.sort_mode] - meeting_b[thisvis.sort_mode];

			}
		});
		// step2: filter
		var filtered_meeting_data = this.data.filter(function(d) {
			var wait_time = d.start - d.appointment;

			if (thisvis.show_mode == "all") {
				return true;
			}
			else if (thisvis.show_mode == "no_wait"){
				return (wait_time <= 0);
			}
			else if (thisvis.show_mode == "any_wait"){
				return (wait_time > 0);
			}
			else if (thisvis.show_mode == "majority_wait"){
				var meet_time = d.end - d.start;
				return (wait_time > meet_time);
			}
		});
		

		// Get a reference to the SVG element
		// . means reference classes
		// # means select id (css)
		var svg = d3.select("#vis_canvas");

		// Draw the waiting times
		var wait_marks = svg.selectAll(".wait")
			.data(filtered_meeting_data, function(d) {return d.id;}); // correspondence between dates and rectangles

		wait_marks.enter().append("rect")
			.attr("class","wait")
			.attr("x", function(d) {return x(d.appointment);})
			.attr("y", function(d,i) {return y(i);})
			.attr("height", y(1)-y(0))
			.attr("width", function(d) {return x(d.start) - x(d.appointment);})
			.style("fill-opacity", 0) // first make it transparent
			.on("click", this.clickHandler) // click and show info
			.transition().delay(!wait_marks.exit().empty() * 500 + !wait_marks.empty()* 1000).duration(500)
				.style("fill-opacity", 1); // then fade in 

		wait_marks
			.transition()
				.delay(!wait_marks.exit().empty() * 500)
				.duration(1000)
			.attr("y", function(d,i) {return y(i);});

		wait_marks.exit() // transparent
			.transition().duration(500)
				.style("fill-opacity", 0)
				.remove();

		// Draw the waiting times
		var meet_marks = svg.selectAll(".meet")
			.data(filtered_meeting_data, function(d) {return d.id});

		meet_marks.enter().append("rect")
			.attr("class","meet")
			.attr("x", function(d) {return x(d.start);})
			.attr("y", function(d,i) {return y(i);})
			.attr("height", y(1)-y(0))
			.attr("width", function(d) {return x(d.end) - x(d.start);})
			.style("fill-opacity", 0) // first make it transparent
			.on("click", this.clickHandler)
			.transition().delay(!meet_marks.exit().empty() * 500 + !meet_marks.empty() * 1000).duration(500)
				.style("fill-opacity", 1); // then fade in 

		meet_marks
			.transition() // how long to transition and when
				.delay(!meet_marks.exit().empty() * 500)
				.duration(1000) // 1 s
			.attr("y", function(d,i) {return y(i);});
		
		meet_marks.exit()
			.transition().duration(500)
				.style("fill-opacity", 0)
				.remove();

	}
}


