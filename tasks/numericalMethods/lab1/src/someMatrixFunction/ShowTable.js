function showTable(divId, lable, matrix) {
    var div = document.getElementById(divId);
    div.innerHTML = lable + "<br>";
    var table = document.createElement("table");
    table.style.border = "1px solid black";

    for (var i = 0; i < matrix.length; i += 20) {
        var tr = document.createElement("tr");

        for (var j = 0; j < matrix[i].length; j++) {
            var td = document.createElement("td");
            td.style.border = "1px solid black";
            td.innerHTML = matrix[i][j];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    div.appendChild(table);
}