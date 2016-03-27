function ClearScheme(step, tay) {
    this.matrix = [];
    this.step = step;
    this.tay = tay;
    this.N = parseInt(1 / this.step) + 1;
    this.K = parseInt(1 / tay) + 1;
}

ClearScheme.prototype = {
    createBucket: function () {
        this.matrix[0] = [];
        for (var i = 0; i < this.N; i++) {
            this.matrix[0][i] = ux0(i * this.step);
        }
        for (var n = 1; n < this.K; n++) {
            this.matrix[n] = [];
            this.matrix[n][0] = u0t(n * this.tay);
            this.matrix[n][this.N - 1] = u1t(n * this.tay);
        }
    },
    calculateMatrix: function () {
        for (var n = 0; n < this.K - 1; n++) {
            for (var i = 1; i < this.N - 1; i++) {
                this.matrix[n + 1][i] = this.matrix[n][i] +
                    (this.tay / this.step * this.step) * (this.matrix[n][i - 1] - 2 * this.matrix[n][i] + this.matrix[n][i + 1]) +
                    this.tay * f(i * this.step, n * this.tay);
            }
        }
        console.log(this.matrix);
    },
    getEpsMatrix: function (normalSchemes) {
        var matrix = [];
        for (var n = 0; n < this.K; n++) {
            matrix[n] = [];
            for (var i = 0; i < this.N; i++) {
                matrix[n][i] = Math.abs(this.matrix[n][i] - normalSchemes.matrix[n][i]);
            }
        }
        return matrix;
    }
};