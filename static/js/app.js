// Get the sample Data
const sampledata = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(sampledata).then(function(sampledata) {
  console.log(sampledata);
});

// Draw the bar plot
function drawBarPlot(idNum) {
  let samplesFilter = sampledata["samples"];

// set variables
  let sampleValue = samplesFilter[0].sample_values;
  let otuIDs = samplesFilter[0].otu_ids;
  let sampleLables = samplesFilter[0].otu_labels;

// trace for the data
  let trace = {
    type: "bar",
    y: otuIDs,
    x: sampleValue,
    text: sampleLables,
    orientation: 'h'
  };

// Data
  let barData = [trace];

// Define the layout
  let layout = {
    title: "Top 10 OTUs Found",
    yaxis: { title: "OTU Labels" },
    xaxis: { title: "Values"}
  };

Plotly.newPlot("bar", traceData, layout);
}