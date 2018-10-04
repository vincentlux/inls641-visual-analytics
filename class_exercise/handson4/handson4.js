class PovertyRateVis {

    constructor(svg_id) {
        this.url = "https://ils.unc.edu/~gotz/courses/data/states.csv"; // data from sils server
		this.svg_id = svg_id;
		
		this.loadAndPrepare();
	}
	
	render(min_rate, max_rate, avg_data) {
		// Set up spacing and scales
		let plot_width = 150;
		let plot_spacing = 30;

		let y = d3.scaleLinear()
				.domain([min_rate, max_rate])
				.range([plot_width,0]);
		
		// Get a reference to the svg element
		let svg = d3.select('#' + this.svg_id);

		// Draw groups 
		let region_grps = svg.selectAll('.region_grps').data(avg_data);
		region_grps = region_grps.enter().append('g')
			.attr('class', 'region_grps')
			.attr('transform', function(d,i) {
				return "translate("+(plot_spacing+i*(plot_width+plot_spacing))+","+plot_spacing+")";
			}
		);
		
		// Draw background
		region_grps.append("rect")
			.attr('x',0)
			.attr('y',0)
			.attr('height', plot_width)
			.attr('width', plot_width)
			.style('fill','#f4f4f4')
			.on("mousemove", function(d) {
                let mouse_coords = d3.mouse(this);
                svg.selectAll(".highlightline")
                    .attr("y1", mouse_coords[1])
                    .attr("y2", mouse_coords[1]);
            })
            .on("mouseout", function(d) {
                svg.selectAll(".highlightline")
                    .attr("y1", -100)
                    .attr("y2", -100);
			});
			
		// Now a "highlight line", drawn first to be "in the back".  Notice the 'y' values are -100 to be off screen
        // to start.
        region_grps.append("line")
            .attr("class", "highlightline")
            .attr("x1", 0)
            .attr("x2", plot_width)
            .attr("y1", -100)
            .attr("y2", -100)
            .style("stroke", "gold")
            .style("stroke-width", 4);

		// Draw state lines
		let state_lines = region_grps.selectAll('.stateLine').data(function(d) {
			return d.value.states;
		});
		state_lines.enter().append("line")
			.attr("class", "stateline")
			.attr("x1", 0)
			.attr("x2", plot_width)
			.attr("y1", function(d) {return y(d.poverty_rate);})
			.attr("y2", function(d) {return y(d.poverty_rate);})
			.style("stroke", "lightblue");
		
		// Draw the average line.
		region_grps.append("line")
			.attr("x1", 0)
			.attr("x2", plot_width)
			.attr("y1", function(d) { return y(d.value.avg_poverty_rate); })
			.attr("y2", function(d) { return y(d.value.avg_poverty_rate); })
			.style("stroke", "red");

		// Draw text labels for region name, min, max, and average for each region.
		// First, the region name.
		region_grps.append("text")
			.attr("class","label")
			.attr("x",0)
			.attr("y",plot_width)
			.attr("dy","1.0em")
			.text(function(d) { return d.key; });

		// Now the minimum poverty rate.
		region_grps.append("text")
			.attr("class","label")
			.attr("x",-2)
			.attr("y",plot_width)
			.attr("text-anchor","end")
			.text(min_rate);

		// Now the maximum poverty rate.
		region_grps.append("text")
			.attr("class","label")
			.attr("x",-2)
			.attr("y",0)
			.attr("dy","0.7em")
			.attr("text-anchor","end")
			.text(max_rate);

		region_grps.append("text")
			.attr("class", "avglabel")
			.attr("x", -2)
			.attr("y", function(d) { return y(d.value.avg_poverty_rate); })
			.attr("dy", "0.4em")
			.attr("text-anchor", "end")
			.style("fill", "red")
			.text(function(d) {
				return Math.round(d.value.avg_poverty_rate);
			});
		

	}

	loadAndPrepare() {
		let thisvis = this;

		d3.csv(this.url, 
			function(d) {
			//function: things we need to do for every row in csv
				return{
					state: d.state,
					region: d.region,
					poverty_rate: +d.poverty_rate, // +: change str to num
					life_expectancy: +d.life_expectancy
				}
		}).then(function(data) { // then here applies to all the data
			console.log("Done loading!" + data.length + " records!");

			// Calculate global mean and max
			let min_rate = d3.min(data, function(d) { return d.poverty_rate; });
			let max_rate = d3.max(data, function(d) { return d.poverty_rate; });

			// Group data by region using d3.nest
			// First give order and rules then give it data

			/* let nested_data = d3.nest()
			  .key(function(d) { return d.region; })
			  .sortKeys(d3.ascending)
			  .entries(data); */ // combined with avg_data

			// Calculating avg poverty rate by region
			let avg_data = d3.nest()
			  .key(function(d) { return d.region; })
			  .sortKeys(d3.ascending)
			  .rollup(function(region_of_states) {
				  let pr_mean = d3.mean(region_of_states, function(one_state) { return one_state.poverty_rate; });
				  let le_mean = d3.mean(region_of_states, function(one_state) { return one_state.life_expectancy; });

				  return {
					  states: region_of_states, 
					  avg_poverty_rate: pr_mean,
					  life_expectancy: le_mean
				  }

			  })
			  .entries(data);
			thisvis.render(min_rate, max_rate, avg_data);
		}); 

	}
	
	// We will write the code required to make a "small-multiples" visualization of
	// poverty rates by region.  We'll include both individual states as well as
	// regional averages.
	//
	// This exercise will demonstrate D3's capabilities for:
	// 1) Loading CSV data
	// 2) Group data via d3.nest
	// 3) "Rolling up" data via d3.nest
	// 4) How to use nested data to drive small multiple rendering
	// 5) The use of D3 math functions including min, max, and mean.
	//
	// This exercise will also serve as a review for many of the D3 concepts covered
	// in earlier classroom exercises.
}

