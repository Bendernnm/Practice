var obj1 = new ObjectMatrix("test1");
obj1.init();

var obj2 = new ObjectMatrix("test2");
obj2.init();

document.getElementById("btn").onclick = function () {
    var matrix = obj1.add(obj2);
    var table = matrixToTable(matrix);

    document.getElementById("test3").appendChild(table);
}