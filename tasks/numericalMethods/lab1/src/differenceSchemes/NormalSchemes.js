function NormalSchemes(step, tay) {
    this.matrix = [];
    this.step = step;
    this.tay = tay;
    this.N = parseInt(1 / this.step) + 1;
    this.K = parseInt(1 / tay) + 1;
}

NormalSchemes.prototype = {
    create: function () {
        for (var n = 0; n < this.K; n++) {
            this.matrix[n] = [];
            for (var i = 0; i < this.N; i++) {
                this.matrix[n][i] = uxt(i * this.step, n * this.tay);
            }
        }
    }
};