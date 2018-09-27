
class PovertyRateVis {

    constructor(svg_id) {
        this.url = "https://ils.unc.edu/~gotz/courses/data/states.csv"; // data from sils server
		this.svg_id = svg_id;
		
		this.loadAndPrepare();
	}
	
	render(min_rate, max_rate, avg_data) {
		console.log("Rendering");
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
				  let pr_mean = d3.mean(region_of_states, function(one_state) { return one_state.poverty_rate });
				  let le_mean = d3.mean(region_of_states, function(one_state) { return one_state.life_expectancy });

				  return {
					  states: region_of_states, 
					  poverty_rate: pr_mean,
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

