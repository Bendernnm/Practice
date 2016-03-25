var Task8 = {};
Task8.array = [];
Task8.dictionary = new Dictionary();

window.onload = function () {
    document.getElementById("btnAddElements").onclick = function () {
        Task8.addElement();
        Task8.writeToTable("arrayData")
    };

    document.getElementById("btnCalculate").onclick = function () {
        Task8.calculate();
        Task8.writeResult("result");
    };
};

Task8.addElement = function () {
    var countElement = parseInt(prompt("¬вед≥ть к≥льк≥сть елемент≥в: ", "0"));
    for (var i = 0; i < countElement; i++) {
        Task8.array[i] = parseFloat(prompt("¬вед≥ть число: ", "0"));
    }

    console.log(Task8.arrayToString());
};

Task8.calculate = function () {
    for (var i = 0; i < Task8.array.length; i++) {
        if (!Task8.dictionary.containsKey(Task8.array[i])) {
            Task8.dictionary.addElement(Task8.array[i], 1);
        }
        else {
            var key = Task8.array[i];
            var index = Task8.dictionary.getIndex(key);
            Task8.dictionary.getValues()[index]++;
        }
    }
    console.log(Task8.dictionary.toString());
};

Task8.arrayToString = function () {
    var str = Task8.array[0] + "\t";
    for (var i = 1; i < Task8.array.length; i++) {
        str += Task8.array[i] + "\t";
    }
    return str;
};

Task8.writeToTable = function (tableId) {
    var table = document.getElementsByTagName("table")[0];
    styleTable(table);

    var tr = document.getElementById(tableId);
    for (var i = 0; i < Task8.array.length; i++) {
        tr.appendChild(createTd(i));
    }

    function createTd(i) {
        var tdBuff = document.createElement("td");
        tdBuff.innerHTML = Task8.array[i];
        tdBuff.style.border = "1px solid black";
        return tdBuff;
    }

    function styleTable(table) {
        table.style.border = "1px solid black";
        table.style.fontSize = "30px";
    }
}

Task8.writeResult = function (div) {
    var divResult = document.getElementById(div);
    styleDiv();
    for (var i = 0; i < Task8.dictionary.getLength(); i++) {
        divResult.innerHTML += createElementResult(i);
    }

    function styleDiv() {
        divResult.fontSize = "30";
        divResult.border = "1px solid black";
    }

    function createElementResult(i) {
        return Task8.dictionary.getPairToString(i) + "<br>";
    }
}