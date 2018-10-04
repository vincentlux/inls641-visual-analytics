var p_threshold = 0.01;
var width = 150;
var height = 150;
var margin_x = 20;
var margin_y = 20;

function produceAndPositionScatterPlot(data1, data2, field1, field2) {
	var corr_coef = ss.sampleCorrelation(data1, data2);
	var p_value = getPforR(corr_coef, data1.length);

	var container_id = "#";
	// use p_value to find which column to put in
	if (p_value <= p_threshold) {
		// Put the chart in the significant col
		container_id += "significant";
	}
	else {
		// Put it in the insignificant col
		container_id = container_id + "insignificant";
	}

	// Create an SVG element in the right col
	var svg = d3.select(container_id).append("svg")
		.attr("width", width+margin_x*2)
		.attr("height", height + margin_y*2);

	console.log("Producing and positioning " + field1 + " x " + field2);
	console.log("r =  " + corr_coef);
	console.log("r =  " + p_value);
	renderScatterplot(svg, field1, data1, field2, data2);
}

function renderScatterplot(svg, field1, data1, field2, data2) {
	// Create scales
	var x = d3.scaleLinear()
		.domain([ss.min(data1), ss.max(data1)])
		.range([0, width]);	

	var y = d3.scaleLinear()
		.domain([ss.min(data2), ss.max(data2)])
		.range([height, 0]);
	
	// Create a group to transform graphics by the margin
	var g = svg.append('g')
		.attr('transform', 'translate('+margin_x+','+margin_y+')');
	
	// Draw everything using g instead of svg
	g.append('rect')
		.attr('class', 'plotbg') 
		.attr('x',0)
		.attr('y',0)
		.attr('width', width)
		.attr('height', height);

	// Next, the quantiles
	g.append('rect')
		.attr('class', 'quantile')
		.attr('y', 0)
		.attr('height', height)
		.attr('x', x(ss.quantile(data1, 0.25)))
		.attr('width', x(ss.quantile(data1, 0.75)) - x(ss.quantile(data1, 0.25)));

	g.append('rect')
		.attr('class', 'quantile')
		.attr('x', 0)
		.attr('width', width)
		.attr('y', y(ss.quantile(data2, 0.75)))
		.attr('height', y(ss.quantile(data2, 0.25)) - y(ss.quantile(data2, 0.75)));

	// Draw the dots for our scatterplot
	var zipped_data = d3.zip(data1, data2);
	
	g.selectAll(".dot").data(zipped_data).enter()
		.append('circle')
		.attr('class', 'dot')
		.attr('cx', function(d) {return x(d[0]); })
		.attr('cy', function(d) {return y(d[1]); })
		.attr('r', 2);

	// Fit a linear regression and calculate R2
	var regression = ss.linearRegression(zipped_data);
	var linear_model = ss.linearRegressionLine(regression);
	var r_squared = ss.rSquared(zipped_data, linear_model);
	console.log("R2 = " + r_squared);
}