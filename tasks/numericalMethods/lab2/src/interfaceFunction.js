function arrayToTable(array) {
    var table = document.createElement("table");

    var tr = document.createElement("tr");
    table.appendChild(tr);

    for (var i = 0, n = array.length; i < n; i++) {
        let td = document.createElement("td");
        td.style.border = "1px solid black";
        td.innerHTML = array[i];
        tr.appendChild(td);
    }

    return table;
}
function matrixToTable(matrix) {
    var table = document.createElement("table");

    for (var i = 0, n = matrix.length; i < n; i++) {
        let tr = document.createElement("tr");
        table.appendChild(tr);

        for (var j = 0, m = matrix[i].length; j < m; j++) {
            let td = document.createElement("td");
            td.innerHTML = matrix[i][j];
            td.style.border = "1px solid black";
            tr.appendChild(td);
        }

    }
    return table;
}

function appendTable(div, label, table) {
    div.innerHTML += label + ":<br>";
    div.appendChild(table);
}
function divBr(div) {
    div.innerHTML += "<br>";
}

function arrayMax(array) {
    var max = array[0];
    for (var i = 1, n = array.length; i < n; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}