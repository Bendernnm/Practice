var y0 = document.getElementById("y0");
var a = document.getElementById("a");
var b = document.getElementById("b");
var n = document.getElementById("n");

var write1 = document.getElementById("write1");
var write2 = document.getElementById("write2");
var write3 = document.getElementById("write3");
var write4 = document.getElementById("write4");

var btnEM = document.getElementById("btnEM");
btnEM.onclick = function () {
    EM(parseFloat(y0.value), parseFloat(a.value), parseFloat(b.value), parseInt(n.value), F, write1);
};

var btnEMM = document.getElementById("btnEMM");
btnEMM.onclick = function () {
    EMM(parseFloat(y0.value), parseFloat(a.value), parseFloat(b.value), parseInt(n.value), F, write2);
};

var btnECM = document.getElementById("btnECM");
btnECM.onclick = function () {
    ECM(parseFloat(y0.value), parseFloat(a.value), parseFloat(b.value), parseInt(n.value), F, write3);
};

var btnMRK = document.getElementById("btnMRK");
btnMRK.onclick = function () {
    MRK(parseFloat(y0.value), parseFloat(a.value), parseFloat(b.value), parseInt(n.value), F, write4);
};

function EM(y0, a, b, n, f, div) {
    div.innerHTML = "";

    let $y = get$F(a, b, n, $F);

    let y = [];
    y[0] = y0;

    let x = [];
    x[0] = a;

    let h = (b - a) / n;

    for (let i = 1; i < n; i++) {
        y[i] = y[i - 1] + h * f(x[i - 1], y[i - 1]);
        x[i] = x[i - 1] + h;
    }

    appendTable(div, "X", arrayToTable(x));
    divBr(div);

    appendTable(div, "Y", arrayToTable(y));
    divBr(div);

    appendTable(div, "Y*", arrayToTable(get$F(a, b, n, $F)));
    divBr(div);

    appendTable(div, "Eps", arrayToTable(getEps(y, $y)));
    divBr(div);
}
function EMM(y0, a, b, n, f, div) {
    div.innerHTML = "";

    let $y = get$F(a, b, n, $F);

    let y = [];
    y[0] = y0;

    let x = [];
    x[0] = a;

    let h = (b - a) / n;

    let y_ = [];
    y_[0] = y[0] + (h / 2) * F(x[0], y[0]);

    let x_ = [];
    x_ [0] = x[0] + (h / 2);


    for (let i = 1; i < n; i++) {
        y[i] = y[i - 1] + h * f(x_[i - 1], y_[i - 1]);
        x[i] = x[i - 1] + h;

        y_[i] = y[i] + (h / 2) * F(x[i], y[i]);
        x_ [i] = x[i] + (h / 2);
    }

    appendTable(div, "X", arrayToTable(x));
    divBr(div);

    appendTable(div, "Y", arrayToTable(y));
    divBr(div);

    appendTable(div, "Y*", arrayToTable(get$F(a, b, n, $F)));
    divBr(div);

    appendTable(div, "Eps", arrayToTable(getEps(y, $y)));
    divBr(div);
}
function ECM(y0, a, b, n, f, div) {
    div.innerHTML = "";

    let $y = get$F(a, b, n, $F);

    let y = [];
    y[0] = y0;

    let x = [];
    x[0] = a;

    let h = (b - a) / n;

    let y_ = [];
    y_[0] = 0;

    for (let i = 1; i < n; i++) {
        x[i] = x[i - 1] + h;
        y_[i] = y[i - 1] + h * f(x[i - 1], y[i - 1]);
        y[i] = y[i - 1] + (h / 2) * (f(x[i - 1], y[i - 1]) + f(x[i], y_[i]));
    }

    appendTable(div, "X", arrayToTable(x));
    divBr(div);

    appendTable(div, "Y", arrayToTable(y));
    divBr(div);

    appendTable(div, "Y*", arrayToTable(get$F(a, b, n, $F)));
    divBr(div);

    appendTable(div, "Eps", arrayToTable(getEps(y, $y)));
    divBr(div);
}
function MRK(y0, a, b, n, f, div) {
    div.innerHTML = "";

    let $y = get$F(a, b, n, $F);

    let y = [];
    y[0] = y0;

    let x = [];
    x[0] = a;

    let h = (b - a) / n;

    let y_ = [];
    y_[0] = 0;

    let x_ = [];
    x_[0] = a + (h / 2);

    for (let i = 1; i < n; i++) {
        x[i] = x[i - 1] + h;
        x_[i] = x[i] + (h / 2);

        let k1 = f(x[i - 1], y[i - 1]);
        let y_i1 = y[i - 1] + h / (2 * k1);

        let k2 = f(x_[i - 1], y_i1);
        let y_i2 = y[i - 1] + h / (2 * k2);

        let k3 = f(x_[i - 1], y_i2);
        let y_i3 = y[i - 1] + h * k3;

        let k4 = f(x[i], y_i3);

        y[i] = y[i - 1] + ((h / 6) * (k1 + 2 * k2 + 2 * k3 + k4));
    }

    appendTable(div, "X", arrayToTable(x));
    divBr(div);

    appendTable(div, "Y", arrayToTable(y));
    divBr(div);

    appendTable(div, "Y*", arrayToTable(get$F(a, b, n, $F)));
    divBr(div);

    appendTable(div, "Eps", arrayToTable(getEps(y, $y)));
    divBr(div);
}


function get$F(a, b, n, f) {
    console.log("start");
    let h = (b - a) / n;
    let array = [];

    for (let i = 0; i < n; i++) {
        array[i] = f(a + h * i);
    }
    console.log("end");

    return array;
}

function getEps(y, y_) {
    var eps = [];

    for (var i = 0; i < y.length; i++) {
        eps[i] = Math.abs(y_[i] - y[i]);
    }

    let max = arrayMax(eps);
    console.log("max = " + max);
    alert(max);

    return eps;
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