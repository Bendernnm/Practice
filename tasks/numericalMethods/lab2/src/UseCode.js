var write1 = document.getElementById("write1");
var write2 = document.getElementById("write2");

var btnCalculateFure = document.getElementById("btnCalculateFure");
btnCalculateFure.onclick = calculateFure;

var btnCalculateTMA = document.getElementById("btnCalculateTMA");
btnCalculateTMA.onclick = calculateTMA;

const PI = Math.PI;
const l = 2.0;

function calculateFure() {
    write1.innerHTML = "";

    const N = parseInt(document.getElementById("N").value);
    const h = l / N;

    var X = calculateX(N, h);
    appendTable(write1, "X", arrayToTable(X));
    divBr(write1);

    var mu = calculateMu(N, h);
    appendTable(write1, "Mu", matrixToTable(mu));
    divBr(write1);

    var f_ = calculateF_(mu, N, h, X);
    appendTable(write1, "F_", arrayToTable(f_));
    divBr(write1);

    var lymbda = calculateLymbda(N, h);
    appendTable(write1, "lymbda", arrayToTable(lymbda));
    divBr(write1);

    var c = calculateC(f_, N, lymbda);
    appendTable(write1, "C", arrayToTable(c));
    divBr(write1);

    var y_ = calculateY_(c, N, mu);
    appendTable(write1, "Y_", arrayToTable(y_));
    divBr(write1);

    var y = calculateY(N, X);
    appendTable(write1, "Y", arrayToTable(y));
    divBr(write1);

    var eps = calculateEps(N, y, y_);
    appendTable(write1, "Eps", arrayToTable(eps));
    divBr(write1);
}

function calculateTMA() {
    write2.innerHTML = "";

    const N = parseInt(document.getElementById("N").value);
    const h = l / N;

    var x = calculateX(N, h);
    appendTable(write2, "X", arrayToTable(x));
    divBr(write2);

    var matrix = createMatrix(N, h);
    appendTable(write2, "Matrix", matrixToTable(matrix));
    divBr(write2);

    var y_ = calculateMatrixTMA(matrix);
    appendTable(write2, "Y_", arrayToTable(y_));
    divBr(write2);

    var y = calculateY(N, x);
    appendTable(write2, "Y", arrayToTable(y));
    divBr(write2);

    var eps = calculateEps(N, y, y_);
    appendTable(write2, "Eps", arrayToTable(eps));
    divBr(write2);
}


function calculateX(N, h) {
    let x = [];
    var length = N - 2;
    for (var i = 0; i < length; i++) {
        x[i] = getXi(i + 1, h)
    }
    return x;
}
function calculateMu(N, h) {
    var mu = [];
    var length = N - 2;

    for (var k = 0; k < length; k++) {
        mu[k] = [];
        for (var j = 0; j < length; j++) {
            let sin = Math.sin(getSinArgument(k, h, j));
            mu[k][j] = Math.sqrt((2 / l)) * sin;
        }
    }

    return mu;

    function getSinArgument(k, h, j) {
        return (PI * (k + 1) * getXi((j + 1), h)) / l;
    }
}
function calculateF_(mu, N, h, X) {
    var f_ = [];
    var length = N - 2;

    for (var k = 0; k < length; k++) {
        var sum = 0;
        for (var j = 0; j < length; j++) {
            let f = F(X[j]);
            let muValue = mu[k][j];

            sum += f * muValue;
        }
        f_[k] = sum * h;
    }

    return f_;
}
function calculateLymbda(N, h) {
    var lymbda = [];
    var length = N - 2;

    for (var k = 0; k < length; k++) {
        let argument = getSinArgument(k + 1, h);
        let sin = Math.sin(argument);

        lymbda[k] = (4 / (h * h)) * sin * sin;
    }

    return lymbda;

    function getSinArgument(k, h) {
        return (PI * k * h) / (2 * l);
    }
}
function calculateC(f_, N, lymbda) {
    var c = [];
    var length = N - 2;

    for (var i = 0; i < length; i++) {
        c[i] = f_[i] / lymbda[i];
    }

    return c;
}
function calculateY_(c, N, mu) {
    var y_ = [];
    var length = N - 2;

    for (var i = 0; i < length; i++) {
        var summ = 0;
        for (var k = 0; k < length; k++) {
            summ += c[k] * mu[k][i];
        }
        y_[i] = summ;
    }

    return y_;
}
function calculateY(N, X) {
    var y = [];
    var length = N - 2;

    for (var i = 0; i < length; i++) {
        y[i] = U(X[i]);
    }
    return y;
}
function calculateEps(N, y, y_) {
    var length = N - 2;
    var eps = [];

    for (var i = 0; i < length; i++) {
        eps[i] = Math.abs(y_[i] - y[i]);
    }

    alert(arrayMax(eps));

    return eps;
}

function createMatrix(N, h) {
    var matrix = [];
    var length = N - 2;

    var h2 = h * h;
    var a = 1 / h2;
    var b = -2 / h2;
    var c = 1 / h2;

    matrix[0] = [];
    matrix[0][0] = b;
    matrix[0][1] = c;

    for (var i = 2; i < length; i++) {
        matrix[0][i] = 0;
    }

    for (var i = 1; i < length - 1; i++) {
        matrix[i] = [];
        for (var j = 0; j < length; j++) {
            switch (j) {
                case i - 1:
                    matrix[i][j] = a;
                    break;
                case i:
                    matrix[i][j] = b;
                    break;
                case i + 1:
                    matrix[i][j] = c;
                    break;
                default:
                    matrix[i][j] = 0;
                    break;
            }
        }
    }

    var last = length - 1;
    matrix[last] = [];
    matrix[last][last - 1] = a;
    matrix[last][last] = b;

    for (var i = 0; i < last - 1; i++) {
        matrix[last][i] = 0;
    }


    for (var i = 0; i < length; i++) {
        let x = getXi(i + 1, h);
        matrix[i][length] = -F(x);
    }

    return matrix;
}

