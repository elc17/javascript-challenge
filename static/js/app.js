// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Select the buttons
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input values from the form filters
    var date = d3.select("#date").property("value");
    var city = d3.select("#city").property("value").toLowerCase();
    var state = d3.select("#state").property("value").toLowerCase();
    var country = d3.select("#country").property("value").toLowerCase();
    var shape = d3.select("#shape").property("value").toLowerCase();

    // Filter the data with every input
    var results = tableData.filter(value =>
        (value.datetime == date || date == "")&&
        (value.city == city || city == "")&&
        (value.state == state || state == "") &&
        (value.country == country || country == "")&&
        (value.shape == shape || shape == ""));

    // Select the table body with d3
    var tbody = d3.select('tbody');

    // Empty the HTML inside the table body
    tbody.html('');

    // Create a table based on the filterd data
    results.forEach((report) => {
        // console.log(report);
        var row = tbody.append('tr');
        Object.entries(report).forEach(([key, value]) => {
            // console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
        });   
    });
}
