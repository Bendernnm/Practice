function addToForm(element, form) {
    form.appendChild(element);
}

function matrixToTable(matrix){
    var n = matrix.length;
    var m = matrix[0].length;

    var table = document.createElement("table");

    for (var i = 0; i < n; i++) {
        var tr = document.createElement("tr");
        for (j = 0; j < m; j++) {
            var td = document.createElement("td");
            td.innerHTML = matrix[i][j];
            td.style.border = "1px black solid";
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    return table;
}