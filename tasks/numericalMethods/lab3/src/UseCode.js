var div = document.getElementById("write");

var PI = Math.PI;

var btn = document.getElementById("btnCalculate");
btn.onclick = calculate;

function calculate() {
    const N1 = parseInt(document.getElementById("N1").value);
    const L1 = parseInt(document.getElementById("L1").value);
    const h1 = L1 / N1;

    const N2 = parseInt(document.getElementById("N2").value);
    const L2 = parseInt(document.getElementById("L2").value);
    const h2 = L2 / N2;

    var x1 = getX(N1, h1);
    appendTable(div, "x1", arrayToTable(x1));
    divBr(div);

    var x2 = getX(N2, h2);
    appendTable(div, "x2", arrayToTable(x2));
    divBr(div);

    var fij = getFij();
    appendTable(div, "Fij", matrixToTable(fij));
    divBr(div);

    var lymbda = getLymbda();
    appendTable(div, "Lymbda", arrayToTable(lymbda));
    divBr(div);

    var mu = getMu();
    appendTable(div, "Mu", matrixToTable(mu));
    divBr(div);

    var f_ = getF_();
    appendTable(div, "F_", matrixToTable(f_));
    divBr(div);

    function getX(N, h) {
        let x = [];
        let length = N - 2;

        for (let i = 0; i < length; i++) {
            x[i] = (i + 1) * h;
        }
        return x;
    }

    function getFij() {
        let fij = [];
        let lengthRow = N1 - 2;
        let lengthColumn = N2 - 2;

        for (let i = 0; i < lengthRow; i++) {
            fij[i] = [];
            for (let j = 0; j < lengthColumn; j++) {
                fij[i][j] = F(x1[i], x2[j]);
            }
        }
        return fij;
    }

    function getLymbda() {
        let lymbda = [];
        let length = N2 - 2;

        for (let k = 0; k < length; k++) {
            let coefficient = 4 / (h2 * h2);
            let argument = (PI * (k + 1) * h2) / (2 * L2);
            let sin = Math.sin(argument);

            lymbda[k] = coefficient * sin * sin;
        }
        return lymbda;
    }

    function getMu() {
        let mu = [];
        let length = N2 - 2;

        let coefficient = Math.sqrt(2 / L2);

        for (let k = 0; k < length; k++) {
            mu[k] = [];
            for (let j = 0; j < length; j++) {
                let argument = (PI * (k + 1) * x2[j]) / (L2);
                let sin = Math.sin(argument);

                mu[k][j] = coefficient * sin;
            }
        }

        return mu;
    }

    function getF_() {
        let f_ = [];
        let lengthRow = N2 - 2;
        let lengthColumn = N1 - 2;

        for (let k = 0; k < lengthRow; k++) {
            f_[k] = [];
            for (let i = 0; i < lengthColumn; i++) {
                let sum = 0;
                for (let j = 0; j < lengthColumn; j++) {
                    sum += F(x1[i], x2[j]) * mu[k][i];
                }
                sum *= h2;
                f_[k][i] = sum;
            }
        }
        return f_;
    }

    function createMatrix() {
        let matrix = [];

        let length = N2 - 2;
        let a = 1 / (h1 * h1);
        let c = 1 / (h1 * h1);

        matrix[0] = [];
        matrix[0][0] = -(2 + lymbda[0]) / (h1 * h1);
        matrix[0][1] = c;
        for (let k = 2; k < length; k++) {
            matrix[0][i] = 0;
        }

        for (let k = 1; k < length - 1; k++) {
            matrix[k] = [];
            for (let i = 0; i < length; i++) {
                switch (i) {
                    case k - 1:
                        matrix[k][i] = a;
                        break;
                    case k:
                        matrix[k][i] = -(2 + lymbda[k]) / (h1 * h1);
                        break;
                    case k + 1:
                        matrix[k][i] = c;
                        break;
                    default:
                        matrix[k][i] = 0;
                        break;
                }
            }
        }

        let lastIndex = length - 1;
        matrix[lastIndex] = [];
        matrix[lastIndex][lastIndex - 1] = a;
        matrix[lastIndex][lastIndex] = -(2 + lymbda[lastIndex]) / (h1 * h1);
        for (let i = 0; i < lastIndex - 1; i++) {
            matrix[lastIndex][i] = 0;
        }

        for (let k = 0; k < length; k++) {
            //matrix[k][length] = -f_[k]    //TODO ???
        }

    }
}