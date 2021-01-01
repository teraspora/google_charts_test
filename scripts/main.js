const r = n => Math.floor(Math.random() * n);

const range = (m, n) => [...(function* (p, q) {
    while (p < q) yield p++;
})(m, n)];

const ids = range(1, 256);
const data = ids.map(n => ([n, r(20), r(50), `2020-11-${n % 30 + 1}`]));
console.table(data);

const headers = [{ label: 'id', type: 'string' },
{ label: 'Company', type: 'number' },
{ label: 'Date', type: 'string' },
{ label: 'Country', type: 'number' }];

// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
    const dtable = google.visualization.arrayToDataTable([headers, ...data]);
    console.table(dtable);
    // Set chart options
    const options = {
        'title': 'Test data visuals',
        'width': 1200,
        'height': 900
    };

    // Instantiate and draw our chart, passing in some options.
    const chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(dtable, options);
}