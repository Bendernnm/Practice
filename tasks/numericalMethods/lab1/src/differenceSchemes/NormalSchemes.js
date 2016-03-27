function NormalSchemes(step, tay) {
    this.matrix = [];
    this.step = step;
    this.tay = tay;
    this.N = parseInt(1 / this.step);
    this.K = parseInt(1 / tay);
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