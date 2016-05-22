function drawChart_() {

    var data = google.visualization.arrayToDataTable(getPoints(F));

    var options = {
        title: 'Lab',
        curveType: 'function',
        legend: {position: 'bottom'},
        colors: ['red'],
        fontSize: 25
    };

    var chart = new google.visualization.LineChart(document.getElementById('drawGraphics'));

    chart.draw(data, options);

    function getPoints(func) {
        var matrix = [];
        matrix[0] = ["X", "Y"];
        var $a = -5;
        var $b = 5;
        var $h = 0.001;
        var count = ($b - $a) / $h;

        var array_x = [];
        var array_y = [];

        for (var i = 0; i < count; i++) {
            array_x[i] = $a + i * $h;
            array_y[i] = func(array_x[i]);
        }

        for (var i = 1; i < count; i++) {
            matrix[i] = [array_x[i], array_y[i]];
        }

        return matrix;
    }
}

function drawChart() {
    let matrix = getPoints(F);

    var data = new google.visualization.DataTable(matrix);

    var options = {
        title: 'Lab',
        curveType: 'function',
        legend: {position: 'bottom'},
        colors: ['red'],
        fontSize: 25
    };

    var chart = new google.visualization.LineChart(document.getElementById('drawGraphics'));
    chart.draw(data, options);
}

function getPoints(func) {
    var matrix = [];
    matrix[0] = ["X", "Y"];
    var $a = -5;
    var $b = 5;
    var $h = 0.001;
    var count = ($b - $a) / $h;

    var array_x = [];
    var array_y = [];

    for (var i = 0; i < count; i++) {
        array_x[i] = $a + i * $h;
        array_y[i] = func(array_x[i]);
    }

    for (var i = 1; i < count; i++) {
        matrix[i] = [array_x[i], array_y[i]];
    }

    return matrix;
}