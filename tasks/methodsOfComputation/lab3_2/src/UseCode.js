var J = [
    [J1, return1],
    [return2, J2]
];

var f = [f1, f2];

var x0 = 0;
var y0 = 0;

var J0 = calculateJ(x0, y0);
var f0 = calculateF(x0, y0);
var matrix0 = createGaussMethod(J0, f0);
var result0 = calculateMatrix(matrix0);

console.log("x = " + x0 + ". y = " + y0 + ".");

x0 += result0[0];
y0 += result0[1];

var count = 1;

do {
    count++;
    var xk = x0;
    var yk = y0;

    var Jk = calculateJ(x0, y0);
    var fk = calculateF(x0, y0);
    var matrixk = createGaussMethod(Jk, fk);
    result0 = calculateMatrix(matrixk);
    x0 += result0[0];
    y0 += result0[1];
    console.log("x = " + x0 + ". y = " + y0 + ".");

} while (Math.abs(xk - x0) > 0.000001 && Math.abs(yk - y0) > 0.000001);

console.log("\nx = " + x0);
console.log("y = " + y0);
console.log("count = " + count);


//----------------------------------------------------------------------------------------------------------------------------

function createGaussMethod(J, f) {
    var matrix = [];
    for (var i = 0; i < J.length; i++) {
        matrix[i] = [];
        for (var j = 0; j < J[i].length; j++) {
            matrix[i][j] = J[i][j];
        }
    }

    var last = matrix[0].length;

    matrix[0][last] = f[0];
    matrix[1][last] = f[1];

    return matrix;
}

function calculateJ(x, y) {
    var array = [];
    array[0] = [];
    array[1] = [];
    array[0][0] = J[0][0](x, y);
    array[0][1] = J[0][1](x, y);
    array[1][0] = J[1][0](x, y);
    array[1][1] = J[1][1](x, y);
    return array;
}
function calculateF(x, y) {
    var array = [];
    array[0] = f[0](x, y);
    array[1] = f[1](x, y);
    return array;
}
function calculateEps(result1, result2) {
    var array = [];
    array[0] = Math.abs(result1[0] - result2[0]);
    array[1] = Math.abs(result1[1] - result2[1]);
    return array.max();
}

function J1(x, y) {
    //return -Math.sin(x);
    //return(-Math.sin(y - 1));
    return -Math.sin(x + 0.5);
}
function J2(x, y) {
    //return -Math.cos(y - 0.5);
    return Math.cos(y);
}
function f1(x, y) {
    //return 1.2 - Math.cos(x) - y;
    //return 0.5 - Math.cos(y - 1) - x;
    return 2 + y - Math.cos(x + 0.5);
}
function f2(x, y) {
    //return 2 - 2 * x + Math.sin(y - 0.5);
    //return 3 - y + Math.cos(x);
    return 1 - Math.sin(y) + 2 * x;
}
function return1(x, y) {
    return -1;
}
function return2(x, y) {
    return -2;
}

function debugWriteMatrix(matrix) {
    var n = matrix.length;
    var m = matrix[0].length;

    var str = "";
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m - 1; j++) {
            str += matrix[i][j] + "\t";
        }
        str += matrix[i][m - 1] + "\n";
    }
    console.log(str);
}
function debugWriteArray(array) {
    var str = "";
    for (var i = 0; i < array.length; i++) {
        str += array[i] + "\t";
    }
    console.log(str);
}