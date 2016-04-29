function drawChart() {
    console.log("::: " + getRadioValue());
    var functionNumber = getRadioValue();

    var data = google.visualization.arrayToDataTable(getPoints(functionNumber == 1 ? function_ex_1 : function_ex_2));

    var options = {
        title: 'Lab',
        curveType: 'function',
        legend: {position: 'bottom'},
        colors: ['red'],
        fontSize: 25
    };

    var chart = new google.visualization.LineChart(document.getElementById('chartBlock'));

    chart.draw(data, options);

    function getPoints(func) {
        var matrix = [];
        matrix[0] = ["X", "Y"];
        var $a = parseFloat(document.getElementById("a").value);
        var $b = parseFloat(document.getElementById("b").value);
        var $h = parseFloat(document.getElementById("h").value);
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

        console.log(matrix);

        return matrix;
    }
}

function getRadioValue() {
    var radio = document.getElementsByName("chooseFunction");
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return radio[i].value;
        }
    }
}