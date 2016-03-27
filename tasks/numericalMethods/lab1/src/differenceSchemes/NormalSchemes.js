function NormalSchemes(step, tay) {
    this.matrix = [];
    this.step = step;
    this.tay = tay;
    this.N = parseInt(1 / this.step);
    this.K = parseInt(1 / tay);
}

NormalSchemes.prototype = {
    create: function () {
        for (var i = 0; i < this.K; i++) {
            this.matrix[i] = [];
            for (var j = 0; j < this.N; j++) {
                this.matrix[i][j] = uxt(j * this.step, i * this.tay);
            }
        }
    }
};



//createBucket: function () {
//    this.matrix[0] = [];
//    for (var j = 0; j < this.N; j++) {
//        this.matrix[0][j] = ux0(j * this.step);
//    }
//    for (var i = 1; i < this.K; i++) {
//        this.matrix[i] = [];
//        this.matrix[i][0] = u0t(i * this.tay);
//        this.matrix[i][this.N - 1] = u1t(i * this.tay);
//    }
//    console.log(this.matrix);
//}