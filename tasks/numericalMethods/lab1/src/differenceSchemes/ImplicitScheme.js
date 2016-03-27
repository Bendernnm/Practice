function ImplicitScheme(step, tay) {
    this.matrix = [];
    this.step = step;
    this.tay = tay;
    this.$y = this.tay / this.step * this.step;
    this.N = parseInt(1 / this.step) + 1;
    this.K = parseInt(1 / tay) + 1;
}

ImplicitScheme.prototype = new ClearScheme();
ImplicitScheme.prototype.calculateMatrix = function () {
    var matrixs = [];
    var result = [];
    for (var n = 0; n < this.K - 1; n++) {
        matrixs[n] = this.createMatrix(n);

        result[n] = calculateMatrixTMA(matrixs[n]);

        for (var k = 0; k < result[n].length; k++) {
            this.matrix[n + 1][k + 1] = result[n][k];
        }
    }
};
ImplicitScheme.prototype.createMatrix = function (n) {
    var matrix = [];
    var length = this.N - 2;

    matrix[0] = [];
    matrix[0][0] = -(1 + 2 * this.$y);
    matrix[0][1] = this.$y;
    for (var i = 2; i < length; i++) {
        matrix[0][i] = 0;
    }

    for (var i = 1; i < length - 1; i++) {
        matrix[i] = [];
        for (var j = 0; j < length; j++) {
            matrix[i][j] = 0;
        }
        matrix[i][i - 1] = this.$y;
        matrix[i][i] = -(1 + 2 * this.$y);
        matrix[i][i + 1] = this.$y;
    }

    matrix[length - 1] = [];
    for (var i = 0; i < length - 2; i++) {
        matrix[length - 1][i] = 0;
    }
    matrix[length - 1][length - 1] = -(1 + 2 * this.$y);
    matrix[length - 1][length - 2] = this.$y;

    for (var i = 0; i < length; i++) {
        matrix[i][length] = this.getF(n, i);
    }

    return matrix;
};
ImplicitScheme.prototype.getF = function (n, i) {
    var yni = this.matrix[n][i];

    var x = i * this.step
    var t = this.tay + n * this.tay;
    var fValue = f(x, t);

    return -(yni + this.tay * fValue);
};
