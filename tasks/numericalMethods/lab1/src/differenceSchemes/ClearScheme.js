function ClearScheme(step, tay) {
    this.matrix = [];
    this.step = step;
    this.tay = tay;
    this.N = parseInt(1 / this.step);
    this.K = parseInt(1 / tay);
}

ClearScheme.prototype ={
    createBucket: function () {
    this.matrix[0] = [];
        for (var j = 0; j < this.N; j++) {
            this.matrix[0][j] = ux0(j * this.step);
        }
        for (var i = 1; i < this.K; i++) {
            this.matrix[i] = [];
            this.matrix[i][0] = u0t(i * this.tay);
            this.matrix[i][this.N - 1] = u1t(i * this.tay);
        }
    }
};