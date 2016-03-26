function PolynomialApproximation(arrayValue, functionValue) {
    this.arrayX = arrayValue;

    if (!!functionValue.f) {
        this.f = new Function(functionValue);
        this.arrayY = f.calculateArrayValue(arrayValue);
    }
    else {
        this.arrayY = functionValue;
    }

    this.averageMatrix = new AverageMatrix(this.arrayX, this.arrayY);
    this.averagePolynomial = calculateMatrix(this.averageMatrix.matrix);

    this.array$Y = getCloseFunction(this.arrayX, this.arrayY, this.averagePolynomial);

    this.arrayEps = getEpsArray(this.arrayY, this.array$Y);

    console.log("X: " + this.arrayX);
    console.log("Y: " + this.arrayY);
    console.log("Matrix: " + this.averageMatrix);
    console.log("Polynomial: " + this.averagePolynomial);
    console.log("$Y: " + this.array$Y);
    console.log("Eps: " + this.arrayEps);

    function getCloseFunction(arrayX, arrayY, averagePolynomial) {
        array$Y = [];

        for (var i = 0; i < arrayY.length; i++) {
            array$Y[i] = 0
        }

        for (var i = 0; i < arrayY.length; i++) {
            for (var j = 0; j < averagePolynomial.length; j++) {
                array$Y[i] += averagePolynomial[j] * Math.pow(arrayX[i], j);
            }
        }

        return array$Y;
    }

    function getEpsArray(arrayY, array$Y) {
        arrayEps = [];
        for (var i = 0; i < arrayY.length; i++) {
            arrayEps[i] = Math.abs(arrayY[i] - array$Y[i]);
        }
        return arrayEps;
    }
}

PolynomialApproximation.prototype = {
    getEps: function () {
        var summ = 0;
        var length = this.arrayEps.length;

        for (var i = 0; i < length; i++) {
            summ += this.arrayEps[i];
        }

        return Math.sqrt(summ / length);
    },
    getX: function () {
        return this.arrayX;
    },
    getY: function () {
        return this.arrayY;
    },
    showTable: function () {
        var tableColumn = 4;
        var div = document.getElementById("divShow");

        var table = document.createElement("table");
        table.style.border = "1px solid black";

        var tr = document.createElement("tr");

        var td = document.createElement("td");
        td.style.border = "1px solid black";
        td.innerHTML = "X";
        tr.appendChild(td);

        td = document.createElement("td");
        td.style.border = "1px solid black";
        td.innerHTML = "Y";
        tr.appendChild(td);

        td = document.createElement("td");
        td.style.border = "1px solid black";
        td.innerHTML = "$Y";
        tr.appendChild(td);

        td = document.createElement("td");
        td.style.border = "1px solid black";
        td.innerHTML = "Eps";
        tr.appendChild(td);

        table.appendChild(tr);

        for (var i = 0; i < this.arrayX.length; i++) {
            tr = document.createElement("tr");

            td = document.createElement("td");
            td.style.border = "1px solid black";
            td.innerHTML = this.arrayX[i];
            tr.appendChild(td);

            td = document.createElement("td");
            td.style.border = "1px solid black";
            td.innerHTML = this.arrayY[i];
            tr.appendChild(td);

            td = document.createElement("td");
            td.style.border = "1px solid black";
            td.innerHTML = this.array$Y[i];
            tr.appendChild(td);

            td = document.createElement("td");
            td.style.border = "1px solid black";
            td.innerHTML = this.arrayEps[i];
            tr.appendChild(td);

            table.appendChild(tr);
        }

        div.appendChild(table);

        var epsLable = document.createElement("p");
        epsLable.innerHTML = "eps: " + this.getEps();

        div.appendChild(epsLable);
    },
    getTableValues: function () {
        var array = [];
        array[0] = ["X", "Y", "Y\'"];
        for (var i = 0; i < this.arrayX.length; i++) {
            array[i + 1] = [this.arrayX[i], this.arrayY[i], this.array$Y[i]];
        }
        return array;
    }
};